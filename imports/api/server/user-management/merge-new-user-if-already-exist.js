import { Meteor } from 'meteor/meteor';


const mergeNewUserIfAlreadyExist = (newUser) => {
    if (newUser.services) {
        const newUserService = newUser.services.google || newUser.services.facebook;
        const newUserIsUsingGoogleService = !!newUser.services.google;
        const newUserIsUsingFacebookService = !!newUser.services.facebook;

        if (newUserService) {
            const existingUser = Meteor.users.findOne({
                $or: [
                    { email: newUserService.email },
                    { 'services.google.email': newUserService.email },
                    { 'services.facebook.email': newUserService.email },
                ]
            });
            if (existingUser) {
                existingUser.services = existingUser.services || {};

                const existingUserHasGoogleService = !!existingUser.services.google;
                const existingUserHasFacebookService = !!existingUser.services.facebook;

                if (newUserIsUsingGoogleService && !existingUserHasGoogleService) {
                    existingUser.services.google = newUserService;
                }
                else if (newUserIsUsingFacebookService && !existingUserHasFacebookService) {
                    existingUser.services.facebook = newUserService;
                }

                Meteor.users.remove({ _id: existingUser._id });

                return existingUser;
            }
        }
    }

    return newUser;
};

export default mergeNewUserIfAlreadyExist;