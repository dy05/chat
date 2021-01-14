import {
    SET_MESSAGES,
    SET_UNREADS,
    SET_USERS,
    SET_ACTIVE_CONTACT
} from './AppReducers'

let fetchApi = async (url, options = {}) => {
    let response = await fetch('/api'+url, {
        credentials: 'same-origin',
        headers: {
            // 'Content-type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
        ...options,
    })

    if (response.ok) {
        return response.json()
    } else {
        let error = await response.json()
        throw new Error(error.message)
    }
}

export const addMessage = (message) => async (dispatch) => {
    console.log(message)
    await fetchApi('/user').then((response) => {
        console.log('response')
    })
    // type: ADD_MESSAGE,
    // data: message,
}

export const getContacts = (contactSlug = null) => async (dispatch) => {
    await fetchApi('/contacts', {}).then((data) => {
        dispatch({
            type: SET_USERS,
            data: data.users,
        })
        dispatch({
            type: SET_UNREADS,
            data: data.unread,
        })
        dispatch({
            type: SET_ACTIVE_CONTACT,
            data: contactSlug === undefined ? null : contactSlug,
        })
    })
}


export const getMessages = (slug) => async (dispatch) => {
    await fetchApi('/messages/'+slug, {}).then((data) => {
        dispatch({
            type: SET_USERS,
            data: data.users,
        })
        dispatch({
            type: SET_UNREADS,
            data: data.unread,
        })
        dispatch({
            type: SET_MESSAGES,
            data: data.messages,
        })
        dispatch({
            type: SET_ACTIVE_CONTACT,
            data: data.contact,
        })
    })
}



