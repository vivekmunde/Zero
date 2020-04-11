import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { connectState } from 'duxact';
import styledTheme from '/imports/ui/styled/theme';
import StyledGlobal from '/imports/ui/styled/global';

const ThemeProvider = ({ loggedInUser, children }) => {
    const isDarkTheme = ((loggedInUser || {}).profile || {}).isDarkTheme;
    return (
        <StyledThemeProvider theme={styledTheme({ baseColor: isDarkTheme ? '#231f44' : '#f8f8f8' }, isDarkTheme)}>
            <React.Fragment>
                <StyledGlobal />
                {children}
            </React.Fragment>
        </StyledThemeProvider >
    );
};

export default connectState(
    ({ loggedInUser }) => ({ loggedInUser })
)(ThemeProvider);
