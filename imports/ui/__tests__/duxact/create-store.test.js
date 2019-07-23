import createStore from '../../duxact/create-store';

describe('createStore()', () => {
    describe('getState()', () => {
        test('Should return initial state', () => {
            const initialState = { some: 'value' };

            const { getState } = createStore(initialState);

            expect(getState()).toEqual(initialState);
        });

        test('Should return current state', () => {
            const initialState = { some: 'value' };

            const { getState, dispatch } = createStore(initialState);

            const newState = { some: 'changed' };
            dispatch(() => newState);

            expect(getState()).toEqual(newState);
        });
    });

    test('Should call the subscribed listeners with updated state', () => {
        expect.hasAssertions();

        const initialState = { some: 'value' };

        const { subscribe, dispatch } = createStore(initialState);

        let newState = { some: 'changed' };
        subscribe((currentState) => {
            expect(currentState).toEqual({ ...initialState, ...newState });
        });
        dispatch(() => newState);

        newState = { some: 'changed again' };
        subscribe((currentState) => {
            expect(currentState).toEqual({ ...initialState, ...newState });
        });
        dispatch(() => newState);
    });

    test('Should unscibscribe the subscribed listeners', () => {
        expect.hasAssertions();

        const initialState = { some: 'value' };

        const { subscribe, dispatch } = createStore(initialState);

        const listener1 = jest.fn();
        const listener2 = jest.fn();

        const unsubscribe1 = subscribe(listener1);
        const unsubscribe2 = subscribe(listener2);

        dispatch(() => ({ some: 'changed' }));

        unsubscribe1();

        dispatch(() => ({ some: 'again' }));

        unsubscribe2();

        dispatch(() => ({ some: 'again & again' }));

        expect(listener1).toHaveBeenCalledTimes(1);
        expect(listener2).toHaveBeenCalledTimes(2);
    });
});