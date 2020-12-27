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
// import { Link } from 'react-router-dom'
// import { addMessage, getContacts } from '../store/modules/AppActions'

function Contact({loading = true, users = [], unreads = [], activeContact = {}}) {
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
                            href={`/${user.slug}`}
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
        <div className="mt-8 container mx-auto flex justify-between">
            <Contact loading={loading} users={users} unreads={unreads} activeContact={activeContact} />
            <div className="w-2/3">
                <div className="bg-white shadow-lg rounded-md px-4 py-4">
                {loading ? (
                    <div className="loading">
                        Loading...
                    </div>
                ) : (
                    !activeUser ? (
                    <div className="bg-red-500 p-4 rounded-md text-white h-16">
                        <p>Veuillez selectionner un contact !</p>
                    </div>
                ) : (
                    <div className="p-4">
                        {activeContact != null && activeContact.id ? (
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
                        ) : ''}
                    </div>
                    )
                )}
                </div>
            </div>
        </div>
    )
}

function Discussion() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    let hasActiveUser = false
    let activeUser = $discussion.getAttribute('data-user')
    if (activeUser != null && activeUser.length > 0) {
        activeUser = JSON.parse(activeUser)
        if (!isNaN(parseInt(activeUser.id))) {
            hasActiveUser = true
        }
    }

    useState(async () => {
        setLoading(true)
        if (hasActiveUser) {
            await dispatch(getMessages(activeUser.slug));
            // dispatch(getMessages(activeUser.slug));
        } else {
            await dispatch(getContacts());
            // dispatch(getContacts());
        }

        setLoading(false);
        // setTimeout(() => setLoading(false), 14000)
    })

    const users = useSelector(usersSelector)
    const unreads = useSelector(unreadSelector)
    const messages = useSelector(messagesSelector)
    const activeContact = useSelector(activeContactSelector)

    return (
        <DiscussionComponent users={users} unreads={unreads} loading={loading}
             activeUser={activeUser} activeContact={activeContact} messages={messages}/>
    )
}

export default Discussion;

