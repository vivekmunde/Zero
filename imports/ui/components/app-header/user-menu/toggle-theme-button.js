import React from 'react';
import { connect } from 'react-redux';
import StyledBareButton from '/imports/ui/styled/button/bare';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import toggleThemeReduxAction from '/imports/ui/components/app-header/user-menu/toggle-theme-redux-action';
import { StyledMenuListItem, StyledMenuListLeftIcon } from './styled';

class ToggleThemeButton extends React.Component {

    toggleTheme = () => {
        toggleThemeReduxAction();
        toggleUserMenuReduxAction();
    }

    render() {
        const { isDarkTheme } = this.props;
        return (
            <StyledMenuListItem
                as={StyledBareButton}
                onClick={this.toggleTheme}
            >
                <StyledMenuListLeftIcon className="fa fa-palette" />
                {isDarkTheme ? 'Light' : 'Dark'} Theme
            </StyledMenuListItem>
        );
    }

}

export default connect(
    ({ isDarkTheme }) => ({ isDarkTheme })
)(ToggleThemeButton);