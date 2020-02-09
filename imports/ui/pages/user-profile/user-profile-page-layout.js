import React from 'react';
import { connectState, arrayToMapStateToProps } from 'duxact';
import AppLayout from '/imports/ui/components/app-layout';
import { StyledPanel, StyledPanelBody } from '/imports/ui/styled/panel';

const UserProfilePageLayout = ({ userProfile }) => (
    userProfile
        ? (
            <AppLayout>
                <StyledPanel>
                    <StyledPanelBody as="section">
                        <h3>{userProfile.profile.name}</h3>
                    </StyledPanelBody>
                </StyledPanel>
            </AppLayout>
        )
        : null
);

export default connectState(arrayToMapStateToProps(['userProfile']))(UserProfilePageLayout);