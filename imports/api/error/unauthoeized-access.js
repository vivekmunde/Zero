import { Meteor } from 'meteor/meteor';

const unauthorizedError = new Meteor.Error({
    message: 'Unauthorized access',
});

export default unauthorizedError;