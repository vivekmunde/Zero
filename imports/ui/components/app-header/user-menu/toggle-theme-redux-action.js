import { getStore } from '/imports/ui/redux-store';

const toggleThemeReduxAction = () => getStore().dispatch({
    type: 'toggleThemeReduxAction',
    updateState: ({ isDarkTheme }) => ({
        isDarkTheme: !isDarkTheme,
    }),
});

export default toggleThemeReduxAction;