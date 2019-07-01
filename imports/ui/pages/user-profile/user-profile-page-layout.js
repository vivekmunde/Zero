import React from 'react';
import { connect } from 'react-redux';
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

export default connect(
    ({ userProfile }) => ({ userProfile })
)(UserProfilePageLayout);