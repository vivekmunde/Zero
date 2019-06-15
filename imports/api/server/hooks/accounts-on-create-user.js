import { Accounts } from 'meteor/accounts-base';
import mergeNewUserIfAlreadyExist from '../user-management/merge-new-user-if-already-exist'

Accounts.onCreateUser((options, newUser) => {
    newUser.profile = options.profile;
    return mergeNewUserIfAlreadyExist(newUser);
});