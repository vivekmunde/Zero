import { Meteor } from 'meteor/meteor';
import isUndefined from '/imports/check/isUndefined';
import isNull from '/imports/check/isNull';

const isUserAdmin = (userId) => {
    if (isUndefined(userId) || isNull(userId)) {
        return false;
    }

    const user = Meteor.users.find(userId);
    if (user) {
        return !!(user.roles || []).find('ADMIN');
    }

    return false;
};

export default isUserAdmin;