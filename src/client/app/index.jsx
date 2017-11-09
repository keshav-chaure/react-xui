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
