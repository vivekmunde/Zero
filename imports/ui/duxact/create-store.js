import isUndefinedOrNull from './is-undefined-or-null';
import isFunction from './is-function';

export default function createStore(preloadedState) {
    let currentState = {};
    let listeners = []
    let isDispatching = false

    if (isFunction(preloadedState)) {
        currentState = preloadedState();
    }
    else {
        currentState = preloadedState;
    }

    function reducer(action) {
        if (isUndefinedOrNull(action)) {
            throw new Error(
                'Action cannot be undefined or null.'
            );
        }

        if (!isFunction(action)) {
            throw new Error(
                `Action must have be a function.`
            );
        }

        return {
            ...currentState,
            ...action(currentState),
        };
    }

    function getState() {
        if (isDispatching) {
            throw new Error(
                'Cannot call getState() as the store is dispatching an action currently and the state is getting updated.'
            );
        }

        return currentState;
    }

    function subscribe(listener) {
        if (!isFunction(listener)) {
            throw new Error('Listener must to be a function.')
        }

        if (isDispatching) {
            throw new Error(
                'Cannot subscribe as the store is dispatching an action.'
            );
        }

        let isSubscribed = true;

        listeners.push(listener);

        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }

            if (isDispatching) {
                throw new Error(
                    'You cannot unsubscribe as the store is dispatching an action.'
                );
            }

            isSubscribed = false;

            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }

    function dispatch(action) {
        if (isDispatching) {
            throw new Error(
                'You cannot dispatch as the store is already dispatching an action.'
            );
        }

        try {
            isDispatching = true;
            currentState = reducer(action);
        } finally {
            isDispatching = false;
        }

        for (let i = 0; i < listeners.length; i++) {
            listeners[i](currentState);
        }
    }

    dispatch(function (state) {
        return state;
    });

    return {
        dispatch,
        getState,
        subscribe
    };
}