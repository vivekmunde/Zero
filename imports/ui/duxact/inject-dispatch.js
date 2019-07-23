import isObject from './is-object';
import isFunction from './is-function';

const injectDispatch = dispatchMapping =>
    dispatch => {
        if (!isObject(dispatchMapping)) {
            throw new Error('Dispatch mapping must be an object.');
        }

        return Object.keys(dispatchMapping)
            .reduce((dispatchers, currentMappingKey) => {
                if (!isFunction(dispatchMapping[currentMappingKey])) {
                    throw new Error('Dispatcher must be a function.')
                }
                dispatchers[currentMappingKey] = (...args) => dispatchMapping[currentMappingKey](dispatch, ...args);
                return dispatchers;
            }, {})
    };

export default injectDispatch;