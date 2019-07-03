import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import UnauthorizedAccessError from '/imports/api/error/unauthoeized-access';
import isUndefinedOrNull from '/imports/check/is-undefined-or-null';
import isObjectEmpty from '/imports/check/is-object-empty';
import isString from '/imports/check/is-string';
import isBoolean from '/imports/check/is-boolean';
import { isUserAdmin } from '/imports/server/check/is-user-admin';

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

        const { _id, name, isDarkTheme } = userDetails;

        if (isUndefinedOrNull(_id)) {
            throw new Meteor.Error({
                message: 'User id missing',
            });
        }

        if (_id !== this.userId && !isUserAdmin(this.userId)) {
            throw UnauthorizedAccessError;
        }

        if (!isUndefinedOrNull(name) && !isString(name)) {
            throw new Meteor.Error({
                name: 'Name must be a string',
            });
        }

        if (!isUndefinedOrNull(isDarkTheme) && !isBoolean(isDarkTheme)) {
            throw new Meteor.Error({
                name: 'Theme must be a boolean',
            });
        }
    },
    run(userDetails) {
        const { _id, name, isDarkTheme } = userDetails;

        const $setValues = {};

        if (!isUndefinedOrNull(name)) {
            $setValues['profile.name'] = name;
        }

        if (!isUndefinedOrNull(isDarkTheme)) {
            $setValues['profile.isDarkTheme'] = isDarkTheme;
        }

        if (!isObjectEmpty($setValues)) {
            Meteor.users.update({ _id }, { $set: $setValues });
        }
    },
});