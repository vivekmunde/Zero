import { Accounts } from 'meteor/accounts-base';
import mergeNewUserIfAlreadyExist from '../userManagement/mergeNewUserIfAlreadyExist'

Accounts.onCreateUser((options, newUser) => {
    newUser.profile = options.profile;
    return mergeNewUserIfAlreadyExist(newUser);
});