import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const intialState = {};

const store = createStore()