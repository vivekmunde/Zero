import { getStore } from '/imports/ui/redux-store';

const resetUserProfileReduxAction = () => getStore()
    .dispatch({
        type: 'userProfile',
        updateState: () => ({
            userProfile: undefined,
        }),
    });

export default resetUserProfileReduxAction;