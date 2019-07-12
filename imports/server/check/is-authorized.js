import { Meteor } from 'meteor/meteor';
import isUndefinedOrNull from '/imports/check/is-undefined-or-null';

const isAuthorized = ({ userId, user, authorization }) => {
    if (isUndefinedOrNull(userId) || isUndefinedOrNull(authorization)) {
        return false;
    }

    let userToBeCheckedForAuthorization = user;

    if (!(user || {}).authorizations) {
        userToBeCheckedForAuthorization = Meteor.users.findOne(userId), { fields: { authorizations: 1 } };
    }

    return ((userToBeCheckedForAuthorization.authorizations || [])
        .find(it => (it === '*' || it === authorization)) || []).length > 0;
}

export default isAuthorized;