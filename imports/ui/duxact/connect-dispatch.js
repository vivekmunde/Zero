import React from 'react';
import isUndefinedOrNull from './is-undefined-or-null';
import isFunction from './is-function';
import StateContext from './state-context';

const connect = mapDispatchToProps => Component => {
    class ConnectDispatch extends React.Component {
        constructor(props, context) {
            super(props, context);
            const { store } = context;

            if (isUndefinedOrNull(store)) {
                throw new Error('Store is not available in context. Use Provider to define the store in context.');
            }

            if (isUndefinedOrNull(mapDispatchToProps)) {
                throw new Error('Dispatch mapping is not defined.');
            }

            if (!isFunction(mapDispatchToProps)) {
                throw new Error('Dispatch mapping must be a function');
            }

            this.store = store;
            this.dispatchers = mapDispatchToProps(store.dispatch);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    {...this.dispatchers}
                />
            );
        }
    }

    ConnectDispatch.contextType = StateContext;

    return ConnectDispatch;
};

export default connect;