import React from 'react';
import isUndefinedOrNull from './is-undefined-or-null';
import StateContext from './state-context';

class Provider extends React.Component {
    constructor(props, context) {
        super(props, context);

        const { store } = props;

        if (isUndefinedOrNull(store)) {
            throw new Error('Store is undefined.');
        }

        this.store = store;
    }

    render() {
        return (
            <StateContext.Provider value={{ store: this.store }}>
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            </StateContext.Provider>
        );
    }
}

export default Provider;