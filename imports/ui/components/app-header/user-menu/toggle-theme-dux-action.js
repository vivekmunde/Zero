import { Meteor } from 'meteor/meteor';

const toggleThemeDuxAction = (dispatch, { userId, isDarkTheme }) =>
    Meteor.call(
        'update-user-profile',
        {
            _id: userId,
            isDarkTheme: !isDarkTheme,
        },
        (error) => {
            if (!error) {
                dispatch(
                    ({ loggedInUser }) => ({
                        loggedInUser: {
                            ...loggedInUser,
                            profile: {
                                ...loggedInUser.profile,
                                isDarkTheme: !isDarkTheme
                            }
                        },
                    })
                );
            }
        }
    );

export default toggleThemeDuxAction;