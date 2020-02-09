import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { connectState } from 'duxact';
import styledTheme from '/imports/ui/styled/theme';
import StyledGlobal from '/imports/ui/styled/global';

const ThemeProvider = ({ loggedInUser, children }) => (
    <StyledThemeProvider theme={styledTheme({ isDark: !!((loggedInUser || {}).profile || {}).isDarkTheme })}>
        <React.Fragment>
            <StyledGlobal />
            {children}
        </React.Fragment>
    </StyledThemeProvider>
);

export default connectState(
    ({ loggedInUser }) => ({ loggedInUser })
)(ThemeProvider);