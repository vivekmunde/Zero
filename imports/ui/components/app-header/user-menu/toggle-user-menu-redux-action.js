import { getStore } from '/imports/ui/redux-store';

const toggleUserMenuReduxAction = () => getStore().dispatch({
    type: 'toggleUserMenuReduxAction',
    updateState: ({ sidebarUserMenuOpen }) => ({
        sidebarUserMenuOpen: !sidebarUserMenuOpen,
    }),
});

export default toggleUserMenuReduxAction;