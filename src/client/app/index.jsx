import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './reducers/counter.reducer';
import IntlProvider from './intl-provider';
const store = createStore(CounterApp);
import Counter from './containers/counter';

class App extends Component{


    render() {
        return (
            <Provider store={store}>
            <IntlProvider>
                <Counter />
            </IntlProvider>
            </Provider>
        );
    }
};

render(<App />, document.getElementById('app'));

/*

import React, { Component } from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import IntlProvider from './intl-provider';
import { Provider } from 'react-redux';
import CounterApp from './reducers/counter.reducer';
import Counter from './containers/counter';
import {getStore} from './store-factory';


const store = getStore();

class App extends Component{


    render() {
        return (
<p>
                <Counter />
</p>
        );
    }
};

render(<Provider store={store}> <IntlProvider>  <Counter /></IntlProvider></Provider>, document.getElementById('app'));
*/
