import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
const enhancers = [];
const initialState = {};

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension);
    }
}

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware),
    ...enhancers)
);

export default store;