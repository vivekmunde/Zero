import injectDispatch from '../../duxact/inject-dispatch';

describe('injectDispatch()', () => {
    test('Should inject dispatch as first argument', () => {
        const dispatch = () => { };
        const argument = 'argument';

        const dispatcher = jest.fn();

        const injector = injectDispatch({ dispatcher });

        const { dispatcher: injectedDispatcher } = injector(dispatch);

        injectedDispatcher(argument);
        expect(dispatcher).toHaveBeenCalledWith(dispatch, argument);
    });
});