import { Meteor } from 'meteor/meteor';
import React from 'react';
import { connectDispatch, injectDispatch } from 'duxact';
import toggleUserMenuDuxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-dux-action';
import StyledBareButton from '/imports/ui/styled/button/bare';
import { StyledLeftIcon } from '/imports/ui/styled/icon';
import { StyledMenuListItem } from './styled';

class LogoutMenuItem extends React.Component {

    logout = () => {
        Meteor.logout();
        this.props.toggleUserMenu();
    }

    render() {
        return (
            <StyledMenuListItem
                as={StyledBareButton}
                onClick={this.logout}
            >
                <StyledLeftIcon className="fa fa-sign-out-alt" />
                Logout
            </StyledMenuListItem>
        );
    }

}

export default connectDispatch(
    injectDispatch({
        toggleUserMenu: toggleUserMenuDuxAction,
    })
)(LogoutMenuItem);