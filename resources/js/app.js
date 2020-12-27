import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Discussion from './components/Discussion.js'
import store from './store/store'
import {Provider} from 'react-redux'
// import About from './components/pages/About'
// import Home from './components/pages/Home'
//
// class App extends Component {
//     render () {
//         return (
//             <BrowserRouter>
//                 <div>
//                     <Switch>
//                         <Route exact path='/home' component={Home} />
//                         <Route exact path='/about' component={About} />
//                     </Switch>
//                 </div>
//             </BrowserRouter>
//         )
//     }
// }

function App() {
    return (
        <Provider store={store}>
            <Discussion/>
        </Provider>
    )
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
