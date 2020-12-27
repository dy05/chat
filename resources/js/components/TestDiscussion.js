import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    activeUserSelector,
    messagesSelector,
    unreadSelector,
    usersSelector,
} from '../store/modules/AppSelectors'
import {
    getContacts,
    getMessages,
    // setLoadingItem,
    // getLoadingItem,
} from '../store/modules/AppActions'
import {useEffect} from "react/cjs/react.production.min";
// import { Link } from 'react-router-dom'
// import MessageBox from './MessageBox'
// import { addMessage, getContacts } from '../store/modules/AppActions'
const APP_DATA = 'APP_DATA'

function Contact({users = [], unreads = []}) {
    return (
        <div className="w-3/12 bg-white shadow-lg rounded-lg px-4 pt-2 pb-8">
            <h1 className="border-b">
                Disccusions
            </h1>
            <ul className="text-sm mt-4">
                {
                    users.map((user, id) => (
                        <li className={`flex${id > 0 ? ' mt-2' : ''}`} key={user.id}>
                            <a className="w-full bg-gray-100 rounded-md p-4"
                                href={`/${user.slug}`}
                            >
                                {user.name}
                                { unreads[user.id] ? `&nbsp;(${unreads[user.id]})` : '' }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

function DiscussionComponent({users = [], unreads = [], activeUser = null, messages = []}) {
    // const dispatch = useDispatch()
    // const [loading, setLoading] = useState(true)
    //
    // useEffect(() => {
    //     setLoading(false)
    //     // getLoadingItem(APP_DATA).then(data => {
    //     //     setLoading(false)
    //     // })
    // })


    return (
        <div className="mt-8 container mx-auto flex justify-between">
            <Contact users={users} unreads={unreads} />
            {/*{loading ? (*/}
            {/*    <div className="loading">*/}
            {/*        Loading...*/}
            {/*    </div>*/}
            {/*) : (*/}
            <div className="w-2/3">
                <div className="block relative w-1/2 overflow-hiddens shadow-lg">
                    {/*<img src="img/mypict.jpg" alt="" className="h-full w-full absolut inset-0 h-full-w-full object-cover"/>*/}
                    <svg className="h-full w-full fill-current text-green-400" viewBox="0 0 786 938">
                        <path d="M786 542.945C786 722.711 717.471 971.673 551.145 934.221C384.819 896.77 383.391 645.668 281.758" />
                    </svg>
                </div>
                <div className="block relative w-1/2 bg-white shadow-lg">
                    <img src="img/mypict.jpg" alt="" className="h-full w-full absolut inset-0 h-full-w-full object-cover"/>
                    <svg className="absolute inset-y-0 h-full fill-current text-gray-100 w-32 -ml-16" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <polygon points="50, 0 100, 0 50, 100 0, 100" />
                    </svg>
                </div>
                <div className="bg-white shadow-lg rounded-xl px-4 py-4 mt-8">
                    {!activeUser ? (
                        <div className="bg-red-500 p-4 rounded-md text-white h-16">
                            <p>Veuillez selectionner un contact !</p>
                        </div>
                    ) : (
                        <div>

                            {/*if(activeUser != null && user != null) {*/}
                            {/*    <MessageBox from_id={user.id} to_id={activeUser.id}/>*/}
                            {/*}*/}
                        </div>
                    )}
                </div>
            {/*)}*/}
            </div>
        </div>
    )
}

function Discussion() {
    const dispatch = useDispatch()
    let hasActiveUser = false
    let $activeUser = $discussion.getAttribute('data-user')
    if ($activeUser != null && $activeUser.length > 0) {
        $activeUser = JSON.parse($activeUser)
        if (!isNaN(parseInt($activeUser.id))) {
            hasActiveUser = true
        }
    }

    useState(() => {
        // dispatch(setLoadingItem(APP_DATA))
        if (hasActiveUser) {
            dispatch(getMessages($activeUser.slug, APP_DATA))
        } else {
            dispatch(getContacts(APP_DATA))
        }
    })

    const users = useSelector(usersSelector)
    const unreads = useSelector(unreadSelector)
    const messages = useSelector(messagesSelector)
    const activeUser = useSelector(activeUserSelector)

    return (
        <DiscussionComponent users={users} unreads={unreads}/>
    )
}

export default Discussion;

