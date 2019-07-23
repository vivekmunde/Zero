import React from 'react';
import connectState from '/imports/ui/duxact/connect-state';
import arrayToMapStateToProps from '/imports/ui/duxact/array-to-map-state-to-props';
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