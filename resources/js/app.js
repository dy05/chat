import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Discussion from './components/GroupDiscussion.js'
import store from './store/store'
import {Provider} from 'react-redux'
// import About from './components/pages/About'
// import Home from './components/pages/Home'

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/home' component={Discussion} />
                        {/*<Route path='/:contact' component={Discussion} />*/}
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}


const $discussion = document.getElementById('discussion')
if ($discussion) {
    window.$discussion = $discussion
    ReactDOM.render(<App/>, $discussion)
}

// const $app = document.getElementById('app')
// if ($app) {
//     ReactDOM.render(<App/>, $app)
// }

// random 404 error page
// find how to send 404 response to server

require('alpinejs');
