import React from 'react';
import isUndefinedOrNull from './is-undefined-or-null';
import isFunction from './is-function';
import StateContext from './state-context';

const connect = mapStateToProps => Component => {
    class ConnectState extends React.Component {
        constructor(props, context) {
            super(props, context);
            const { store } = context;

            if (isUndefinedOrNull(store)) {
                throw new Error('Store is not available in context. Use Provider to define the store in context.');
            }

            if (isUndefinedOrNull(mapStateToProps)) {
                throw new Error('State mapping is not defined.');
            }

            if (!isFunction(mapStateToProps)) {
                throw new Error('State mapping must be a function.');
            }

            this.store = store;
            this.state = mapStateToProps(store.getState());
            this.subscribeToStateChanges();
        }

        componentWillUnmount() {
            this.unsubscribeFromStateChages();
        }

        subscribeToStateChanges = () => {
            this.unsubscribe = this.store.subscribe(this.listener);
        }

        unsubscribeFromStateChages = () => {
            this.unsubscribe();
        }

        listener = state => {
            this.setState(mapStateToProps(state));
        }

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.state}
                />
            );
        }
    }

    ConnectState.contextType = StateContext;

    return ConnectState;
};

export default connect;