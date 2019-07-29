import React from 'react';
import { mount } from 'enzyme';
import createStore from '../../duxact/create-store';
import Provider from '../../duxact/provider';
import connectState from '../../duxact/connect-state';

describe('connectState()', () => {
    test('Should supply initial state to component', () => {
        expect.hasAssertions();

        const StateConsumer = connectState(({ value }) => ({ value }))(
            ({ value }) => (
                <div>{value}</div>)
        );

        const wrapper = mount(
            <Provider store={createStore({ value: 'initial' })}>
                <StateConsumer />
            </Provider>
        );

        expect(wrapper.text()).toEqual('initial');
    });

    test('Should update changed state to component', () => {
        expect.hasAssertions();

        const store = createStore({ one: 'initial', two: 'initial' });

        const StateConsumer = connectState(({ one, two }) => ({ one, two }))(
            ({ one, two }) => (
                <div>{one} &amp; {two}</div>)
        );

        const wrapper = mount(
            <Provider store={store}>
                <StateConsumer />
            </Provider>
        );

        store.dispatch(() => ({ two: 'changed' }));

        expect(wrapper.text()).toEqual('initial & changed');
    });
});