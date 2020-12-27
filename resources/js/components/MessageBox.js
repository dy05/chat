import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../store/modules/AppActions'

const MessageBox = ({activeContact, activeUser}) => {
    // const dispatch = useDispatch()
    const message = useRef(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async e => {
        e.preventDefault()
        console.log('Send')
        // dispatch(addMessage({
        //     message: message.current.value, from_id, to_id,
        // }))
        // message.current.value = ''
        // message.current.focus()
    }

    return (
        <div className="">
            <form action="" method="POST" onSubmit={handleSubmit}>
                <div className="flex justify-between">
                    <textarea ref={message} name="message"
                              className="rounded-sm shadow-md w-11/12">
                    </textarea>
                    <div className="">
                        <button type="submit" className="bg-indigo-500 text-white font-semibold text-md rounded-md px-3 py-1 hover:bg-indigo-700"
                                disabled={loading ? 'disabled' : ''}>
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MessageBox
