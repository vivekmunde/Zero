import React from 'react';
import StyledBareButton from '/imports/ui/styled/button/bare';
import { StyledFlexAlign, StyledFlexAlignLeft, StyledFlexAlignRight } from '/imports/ui/styled/align';
import { StyledIcon, StyledLeftIcon } from '/imports/ui/styled/icon';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import toggleThemeReduxAction from '/imports/ui/components/app-header/user-menu/toggle-theme-redux-action';
import { StyledMenuListItem } from './styled';

class ToggleThemeMenuItem extends React.Component {

    toggleTheme = () => {
        const { loggedInUser } = this.props;
        const { _id: userId, profile: { isDarkTheme } } = loggedInUser;
        toggleThemeReduxAction({ userId: userId, isDarkTheme });
        toggleUserMenuReduxAction();
    }

    render() {
        const { loggedInUser } = this.props;
        return (
            <StyledMenuListItem
                as={StyledBareButton}
                onClick={this.toggleTheme}
            >
                <StyledFlexAlign>
                    <StyledFlexAlignLeft>
                        <StyledLeftIcon className="fa fa-palette" />
                        Dark Mode
                    </StyledFlexAlignLeft>
                    <StyledFlexAlignRight>
                        {loggedInUser.profile.isDarkTheme ? 'ON' : 'OFF'}
                    </StyledFlexAlignRight>
                </StyledFlexAlign>
            </StyledMenuListItem>
        );
    }

}

export default ToggleThemeMenuItem;