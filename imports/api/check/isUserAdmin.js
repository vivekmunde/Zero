import { Meteor } from 'meteor/meteor';
import isUndefined from './isUndefined';
import isNull from './isNull';

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