import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from './reducer'
import App from './components/App'
import thunk from 'redux-thunk'
import Logo from './logo.png'


//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <center> 
             <h3>  The Holy Al Qur'an </h3>
        <img src={Logo} style={{ 
            'background' : '#63c3c9', 'height' : '200px', 'width' : '200px', 'borderRadius' : '30em',
            'opacity': '0.5',
  'filter': 'alpha(opacity=50)'
    }} className="img-fluid" alt="test" />
        </center>
        <App />
    </Provider>
    , document.getElementById('root'))