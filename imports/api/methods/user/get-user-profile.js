import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import isUndefined from '../../check/isUndefined';
import isNull from '../../check/isNull';

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