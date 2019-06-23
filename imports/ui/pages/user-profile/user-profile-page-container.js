import React from 'react';
import getUserProfileReduxAction from './get-user-profile-redux-action';
import resetUserProfileReduxAction from './reset-user-profile-redux-action';

class UserProfilePageContainer extends React.Component {

    componentDidMount() {
        const { match } = this.props;
        getUserProfileReduxAction(match.params.userId);
    }

    componentWillUnmount() {
        resetUserProfileReduxAction();
    }

    render() {
        const { render } = this.props;
        return render();
    }

}

export default UserProfilePageContainer;