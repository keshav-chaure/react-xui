import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Counter.actions';
import {FormattedMessage} from 'react-intl';
import style from './counter.scss';

class Counter extends Component{


    render() {
        const { increment, decrement, count } = this.props;
        return (
            <div >
                <p className="example">
              <FormattedMessage id='WELCOME'/>
               </p>
              <FormattedMessage id='CNTRESULT'/>: {count}
                <div><button onClick={(e) => increment()}><FormattedMessage id='INCREMENT'/></button></div>
                <div><button onClick={(e) => decrement()}><FormattedMessage id='DECREMENT'/></button></div>
                <div>
                <FormattedMessage id='BYE'/>
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
