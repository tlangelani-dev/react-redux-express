import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CounterActions } from './../actions';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="component-counter">
                <h3>Component Counter</h3>
                <p>Counter: {this.props.counter}</p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => dispatch(CounterActions('ADD'))
    };
};

const mapStateToProps = (state) => {
    return state;
};

const DefaultApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default DefaultApp;
