import React from 'react';
import StyledContainer from '/imports/ui/styled/container';
import AppHeader from '/imports/ui/components/app-header';
import StyledAppLayout from './styled';

const AppLayout = ({ children, className, ...props }) => (
    <StyledAppLayout className={className}>
        <AppHeader {...props} />
        <StyledContainer>
            {children}
        </StyledContainer>
    </StyledAppLayout>
);

export default AppLayout;