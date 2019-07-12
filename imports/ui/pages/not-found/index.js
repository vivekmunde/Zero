import React from 'react';
import AppLayout from '/imports/ui/components/app-layout';
import { StyledTextAlignCenter } from '/imports/ui/styled/align';
import { StyledNotFoundPage, StyledPageIcon } from './styled';


const NotFoundPage = () => (
    <AppLayout>
        <StyledNotFoundPage>
            <StyledTextAlignCenter>
                <StyledPageIcon className="fa fa-exclamation-triangle" />
                <h3>Page not found!</h3>
            </StyledTextAlignCenter>
        </StyledNotFoundPage>
    </AppLayout>
);

export default NotFoundPage;