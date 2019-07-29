import React from 'react';
import { mount } from 'enzyme';
import Provider from '../../duxact/provider';
import StateContext from '../../duxact/state-context';

describe('<Provider />', () => {
    test('Should set store in the context', () => {
        expect.hasAssertions();

        const store = { some: 'value' };

        class ChildComponent extends React.Component {
            render() {
                const { store } = this.context;
                return (
                    <React.Fragment>{store.some}</React.Fragment>
                );
            }
        }

        ChildComponent.contextType = StateContext;

        const App = () => (
            <Provider store={store}>
                <ChildComponent />
            </Provider>
        );

        const wrapper = mount(<App />);
        expect(wrapper.find(ChildComponent).text()).toEqual('value');
    });
});