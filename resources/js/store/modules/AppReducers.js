export const SET_ACTIVE_CONTACT = 'SET_ACTIVE_CONTACT'
export const SET_USERS = 'SET_USERS'
export const SET_UNREADS = 'SET_UNREADS'
export const SET_MESSAGES = 'SET_MESSAGES'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

const users = []
const unreads = []
const messages = []
const activeContact = {}


export const messagesReducer = (state = messages, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return action.data
        case ADD_MESSAGE:
            return [...state, {...action.data}]
        default:
            return state;
    }
}

export const usersReducer = (state = users, action) => {
    switch (action.type) {
        case SET_USERS:
            return action.data
        default:
            return state;
    }
}

export const unreadReducer = (state = unreads, action) => {
    switch (action.type) {
        case SET_UNREADS:
            return action.data
        default:
            return state;
    }
}

export const activeContactReducer = function (state = activeContact, action) {
    if (action.type === SET_ACTIVE_CONTACT) {
        return action.data
    }
    return state
}

