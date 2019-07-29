import React from 'react';
import { mount } from 'enzyme';
import createStore from '../../duxact/create-store';
import Provider from '../../duxact/provider';
import connectDispatch from '../../duxact/connect-dispatch';

describe('connectDispatch()', () => {
    test('Should dispatch event & update state in store', () => {
        expect.hasAssertions();

        const store = createStore({ one: 'initial', two: 'initial' });

        const Button = connectDispatch(dispatch => ({
            updateState: dispatch(() => ({ two: 'changed' }))
        }))(
            ({ updateState }) => (
                <button
                    onClick={updateState}
                >
                    Click me to update state
                </button>
            )
        );

        const wrapper = mount(
            <Provider store={store}>
                <Button />
            </Provider>
        );

        wrapper.find(Button).simulate('click');
        expect(store.getState()).toEqual({ one: 'initial', two: 'changed' });
    });
});