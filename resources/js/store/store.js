import { applyMiddleware, combineReducers, createStore } from 'redux'
import {
    activeContactReducer,
    messagesReducer,
    unreadReducer,
    usersReducer,
} from './modules/AppReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const store = createStore(
    combineReducers({
        users: usersReducer,
        unreads: unreadReducer,
        messages: messagesReducer,
        activeContact: activeContactReducer,
    }),
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

export default store


