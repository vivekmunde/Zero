import { Meteor } from 'meteor/meteor';
import isUndefinedOrNull from '/imports/check/is-undefined-or-null';

const isUserAdmin = (userId) => {
    if (isUndefinedOrNull(userId)) {
        return false;
    }

    const user = Meteor.users.find(userId);
    if (user) {
        return !!(user.roles || []).find('ADMIN');
    }

    return false;
};

export default isUserAdmin;