import React from 'react';
import { connect } from 'react-redux';
import StyledBareButton from '/imports/ui/styled/button/bare';
import { StyledFlexAlign, StyledFlexAlignLeft, StyledFlexAlignRight } from '/imports/ui/styled/align';
import { StyledIcon, StyledLeftIcon } from '/imports/ui/styled/icon';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import toggleThemeReduxAction from '/imports/ui/components/app-header/user-menu/toggle-theme-redux-action';
import { StyledMenuListItem } from './styled';

class ToggleThemeButton extends React.Component {

    toggleTheme = () => {
        const { loggedInUser } = this.props;
        const { _id: userId, profile: { isDarkTheme } } = loggedInUser;
        toggleThemeReduxAction({ userId: userId, isDarkTheme });
        toggleUserMenuReduxAction();
    }

    render() {
        const { loggedInUser = { profile: {} } } = this.props;
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
                        <StyledIcon className={`fa fa-toggle-${loggedInUser.profile.isDarkTheme ? 'on' : 'off'}`} />
                    </StyledFlexAlignRight>
                </StyledFlexAlign>
            </StyledMenuListItem>
        );
    }

}

export default connect(
    ({ loggedInUser }) => ({ loggedInUser })
)(ToggleThemeButton);