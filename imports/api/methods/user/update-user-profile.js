import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import UnauthorizedAccessError from '../../error/unauthoeized-access';
import isNull from '../../check/isNull';
import isUndefined from '../../check/isUndefined';
import isObjectEmpty from '../../check/isObjectEmpty';
import isString from '../../check/isString';
import { isUserAdmin } from '../../check/isUserAdmin';

new ValidatedMethod({
    name: 'update-user-profile',
    validate(userDetails) {
        if (!this.userId) {
            throw UnauthorizedAccessError;
        }

        if (isObjectEmpty(userDetails)) {
            throw new Meteor.Error({
                message: 'User details missing',
            });
        }

        const { _id, name } = userDetails;

        if (isUndefined(_id) || isNull(_id)) {
            throw new Meteor.Error({
                message: 'User id missing',
            });
        }

        if (_id !== this.userId && !isUserAdmin(this.userId)) {
            throw UnauthorizedAccessError;
        }

        if (!isUndefined(name) && !isNull(name) && !isString(name)) {
            throw new Meteor.Error({
                name: 'Name must be a string',
            });
        }
    },
    run(userDetails) {
        const { _id, name } = userDetails;

        const $setValues = {};

        if (!isUndefined(name) && !isNull(name)) {
            $setValues['profile.name'] = name;
        }

        if (!isObjectEmpty($setValues)) {
            Meteor.users.update({ _id }, { $set: $setValues });
        }
    },
});