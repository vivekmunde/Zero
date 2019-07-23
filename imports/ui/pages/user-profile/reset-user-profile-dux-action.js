const resetUserProfileDuxAction = dispatch => {
    dispatch(() => ({
        userProfile: undefined,
    }));
};

export default resetUserProfileDuxAction;