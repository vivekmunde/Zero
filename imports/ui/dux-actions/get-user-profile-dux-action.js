import { Meteor } from 'meteor/meteor';

const getUserProfileDuxAction = (dispatch, userId) => {
    Meteor.call(
        'get-user-profile',
        userId,
        (error, userProfile) => {
            if (error) {
                dispatch(() => ({
                    getUserProfileError: error,
                }));
            }
            else {
                dispatch(() => ({
                    userProfile,
                }));
            }
        },
    );
};

export default getUserProfileDuxAction;