import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import {FormattedMessage} from 'react-intl';
import {IntlProvider} from 'react-intl';
class App extends React.Component {

constructor(props) {
        super(props);
        this.state = {
            name       : 'Eric',
            unreadCount: 1000,
        };
    }

  render () {
        const {name, unreadCount} = this.state;

        return (
            <p>
                <FormattedMessage
                    id="welcome"
                    defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
                    values={{name: <b>{name}</b>, unreadCount}}
                />
            </p>
        );
        }
}

render( <IntlProvider locale="en">
        <App />
    </IntlProvider>, document.getElementById('app'));
