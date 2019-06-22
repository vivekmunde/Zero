import React from 'react';
import toggleUserMenuReduxAction from './toggle-user-menu-redux-action';

const UserMenuToggler = () => (
    <button
        className="z-button z-button_bare"
        onClick={toggleUserMenuReduxAction}
    >
        <i className="fa fa-user z-icon" />
    </button>
);

export default UserMenuToggler;