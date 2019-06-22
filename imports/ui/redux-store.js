import { createStore } from 'redux';

let store = null;

const configureReducer = (initialState = {}) =>
    reducer = (state = initialState, action) => {
        const { updateState, ...rest } = action;
        if (updateState) {
            return {
                ...state,
                ...action.updateState({ ...state, ...rest }),
            }
        }
        return state;
    };

const configureStore = (initialState) => {
    store = createStore(configureReducer(initialState));
    return store;
};

const getStore = () => store;

export { configureStore, getStore };