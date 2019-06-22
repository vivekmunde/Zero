import React from 'react';
import { connect } from 'react-redux';
import AppLayout from '../../components/app-layout';
import getUserProfileReduxAction from './get-user-profile-redux-action';

class UserProfilePage extends React.Component {

    componentDidMount() {
        const { match } = this.props;
        getUserProfileReduxAction(match.params.userId);
    }

    render() {
        const { userProfile } = this.props;

        if (userProfile) {
            return (
                <AppLayout>
                    <section>
                        <h3>{userProfile.profile.name}</h3>
                    </section>
                </AppLayout>
            );
        }

        return null;
    }

}

export default connect(
    ({ userProfile }) => ({ userProfile })
)(UserProfilePage);