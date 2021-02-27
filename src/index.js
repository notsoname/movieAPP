import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App/App';
import './index.css'

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
       <App/>
      </HashRouter>
    </Provider>
  ,document.getElementById('root')
);

