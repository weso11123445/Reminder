import React from 'react'; 
import ReactDOM from 'react-dom';
import App from "./component/App"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'; 
import {Provider} from 'react-redux'; 
import reminders from './reducers';
import "./index.css";

const store = createStore(reminders)

ReactDOM.render(
  <Provider store={store}><App></App></Provider>,
  document.getElementById('root')
)