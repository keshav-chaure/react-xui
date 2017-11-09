import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Counter.actions';
import {FormattedMessage} from 'react-intl';

class Counter extends Component{


    render() {
        const { increment, decrement, count } = this.props;
        return (
            <div>
                Current counter value: {count}
                <div><button onClick={(e) => increment()}>Increment</button></div>
                <div><button onClick={(e) => decrement()}>Decrement</button></div>
                <div>
                <FormattedMessage id='WELCOME'/> <FormattedMessage id='BYE'/>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        count: state
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
