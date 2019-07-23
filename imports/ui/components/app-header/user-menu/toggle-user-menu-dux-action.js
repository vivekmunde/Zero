const toggleUserMenuDuxAction = dispatch => {
    dispatch(({ sidebarUserMenuOpen }) => ({
        sidebarUserMenuOpen: !sidebarUserMenuOpen,
    }));
};

export default toggleUserMenuDuxAction;