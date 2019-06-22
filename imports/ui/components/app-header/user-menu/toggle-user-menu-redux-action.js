import { getStore } from '../../../redux-store';

const toggleUserMenuReduxAction = () => getStore().dispatch({
    type: 'toggleUserMenuReduxAction',
    updateState: ({ sidebarUserMenuOpen }) => ({
        sidebarUserMenuOpen: !sidebarUserMenuOpen,
    }),
});

export default toggleUserMenuReduxAction;