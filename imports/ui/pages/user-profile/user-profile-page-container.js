import React from 'react';
import connectDispatch from '/imports/ui/duxact/connect-dispatch';
import injectDispatch from '/imports/ui/duxact/inject-dispatch';
import getUserProfileDuxAction from '/imports/ui/dux-actions/get-user-profile-dux-action';
import resetUserProfileDuxAction from './reset-user-profile-dux-action';

class UserProfilePageContainer extends React.Component {

    componentDidMount() {
        const { match, getUserProfile } = this.props;
        getUserProfile(match.params.userId);
    }

    componentWillUnmount() {
        this.props.resetUserProfile();
    }

    render() {
        const { render } = this.props;
        return render();
    }

}

export default connectDispatch(
    injectDispatch({
        getUserProfile: getUserProfileDuxAction,
        resetUserProfile: resetUserProfileDuxAction
    })
)(UserProfilePageContainer);