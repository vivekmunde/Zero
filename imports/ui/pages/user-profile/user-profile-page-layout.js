import React from 'react';
import { connect } from 'react-redux';
import AppLayout from '/imports/ui/components/app-layout';

const UserProfilePageLayout = ({ userProfile }) => (
    userProfile
        ? (
            <AppLayout>
                <section>
                    <h3>{userProfile.profile.name}</h3>
                </section>
            </AppLayout>
        )
        : null
);

export default connect(
    ({ userProfile }) => ({ userProfile })
)(UserProfilePageLayout);