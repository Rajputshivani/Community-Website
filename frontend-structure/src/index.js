import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import dummy from './store/reducers/dummy';
import authors from './store/reducers/authors';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    author:authors,
    dummy:dummy
});
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
