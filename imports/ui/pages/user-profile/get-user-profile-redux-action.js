import { Meteor } from 'meteor/meteor';
import { getStore } from '../../redux-store';

const getUserProfileReduxAction = (userId) => getStore()
    .dispatch({
        type: 'userProfile',
        updateState: () => {
            Meteor.call(
                'get-user-profile',
                userId,
                (error, userProfile) => {
                    if (error) {
                        getStore()
                            .dispatch({
                                type: 'userProfile',
                                updateState: () => ({
                                    getUserProfileError: error,
                                }),
                            });
                    }
                    else {
                        getStore()
                            .dispatch({
                                type: 'userProfile',
                                updateState: () => ({
                                    userProfile,
                                }),
                            });
                    }
                },
            );
        },
    });

export default getUserProfileReduxAction;