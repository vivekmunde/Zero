import { Meteor } from 'meteor/meteor';
import { getStore } from '/imports/ui/redux-store';

const toggleThemeReduxAction = ({ userId, isDarkTheme }) => getStore()
    .dispatch({
        type: 'toggleThemeReduxAction',
        updateState: () => {
            Meteor.call(
                'update-user-profile',
                {
                    _id: userId,
                    isDarkTheme: !isDarkTheme,
                },
                (error) => {
                    if (!error) {
                        getStore()
                            .dispatch({
                                type: 'toggleThemeReduxAction',
                                updateState: () => {
                                    return {
                                        isDarkTheme: !isDarkTheme,
                                    };
                                }
                            });
                    }
                }
            );
        },
    });

export default toggleThemeReduxAction;