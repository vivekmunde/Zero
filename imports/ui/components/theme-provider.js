import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
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

export default connect(
    ({ loggedInUser }) => ({ loggedInUser })
)(ThemeProvider);