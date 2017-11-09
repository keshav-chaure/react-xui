// Copyright (c) 2016 Deere & Company
import CounterApp from './reducers/counter.reducer';
import {combineReducers} from 'redux';


let store;

const createStore = () => {

    const reducer = combineReducers({
      CounterApp
    });



};

export const getStore = () => {

    if (!store) {

        store = createStore();

    }

    return store;

};

/* eslint-disable no-undefined */

export const destroyStore = () => {

    store = undefined;

};

/* eslint-enable no-undefined */
