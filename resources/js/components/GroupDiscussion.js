import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    activeContactSelector,
    messagesSelector,
    unreadSelector,
    usersSelector,
} from '../store/modules/AppSelectors'
import {
    getContacts,
    getMessages,
} from '../store/modules/AppActions'
import MessageBox from "./MessageBox";
import { Link, useParams } from "react-router-dom";

function Contact({loading = true, users = [], unreads = [], activeContact = {}}) {
    const addNewDiscussion = (e) => (userSlug) => {
        e.preventDefault();
        console.log('ok ')
        console.log(userSlug)
        initDiscussion()
    }
    return (
        <div className="w-3/12 bg-white shadow-lg rounded-lg px-4 pt-2 pb-8">
            <h1 className="border-b mb-4">
                Disccusions
            </h1>
            {loading ? (
            <div className="loading">
                Loading...
            </div>
            ) : (
            <ul className="text-sm">
            {
                users.map((user, id) => (
                    <li className={`flex${id > 0 ? ' mt-2' : ''}`} key={user.id}>
                        <a className={`w-full rounded-md p-4 ${activeContact != null && activeContact.id == user.id ? 'bg-green-100' : 'bg-gray-100'}`}
                            href={`/${user.slug}`} onClick={addNewDiscussion(fuser.slug)}
                        >
                            {user.name}
                            { unreads[user.id] ? `&nbsp;(${unreads[user.id]})` : '' }
                        </a>
                    </li>
                ))
            }
            </ul>
            )}
        </div>
    )
}

function DiscussionComponent({loading = true, users = [], unreads = [], activeUser = null, activeContact = {}, messages = []}) {
    let $messages = [];
    if (messages.data) {
       $messages = messages.data;
    }

    return (
        <div>
        {loading ? (
            <div className="loading">
                Loading...
            </div>
        ) : (
            <div className="p-4">
                <div>
                    <h1>
                        {activeContact.name}
                    </h1>
                    <div className="mt-5 pt-5 border-t border-gray-200">
                        {$messages.map((message, index) => (
                            <div key={index}>
                                {message.sender.name}
                                <br/>
                                {message.message}
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 pt-5 border-t border-gray-200">
                        <MessageBox activeUser={activeUser} activeContact={activeContact}/>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

function initDiscussion() {
    let $discussionDiv = document.getElementById('discussionDiv');
    if (!$discussionDiv) {
        document.createElement('div').setAttribute('id', 'discussionDiv');
    }

    return $discussionDiv;
}


function Discussion() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { contact } = useParams();

    useState(async () => {
        setLoading(true)
        await dispatch(getContacts(contact));
        setLoading(false);
    })

    const users = useSelector(usersSelector)
    const unreads = useSelector(unreadSelector)
    const messages = useSelector(messagesSelector)
    const activeContact = useSelector(activeContactSelector)
    const loggedUser = useSelector(({loggedUser}) => loggedUser)

    return (
        <div className="mt-8 container mx-auto flex justify-between">
            <Contact loading={loading} users={users} unreads={unreads} activeContact={activeContact} />
            <div className="w-2/3">
                <div className="bg-white shadow-lg rounded-md px-4 py-4">
                {/*<DiscussionComponent users={users} unreads={unreads} loading={loading}*/}
                {/*     activeUser={loggedUser} activeContact={activeContact} messages={messages}/>*/}
                </div>
            </div>
        </div>
    )
}

export default Discussion;

