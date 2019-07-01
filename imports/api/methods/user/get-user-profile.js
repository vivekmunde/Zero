import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import isUndefined from '/imports/check/is-undefined';
import isNull from '/imports/check/is-null';

new ValidatedMethod({
    name: 'get-user-profile',
    validate(userId) {
        if (isUndefined(userId) || isNull(userId)) {
            throw new Meteor.Error({
                message: 'UserId is required',
            });
        }
    },
    run(userId) {
        return Meteor.users.findOne(
            userId,
            {
                fields: {
                    _id: 1,
                    'profile.name': 1,
                },
            },
        );
    },
});