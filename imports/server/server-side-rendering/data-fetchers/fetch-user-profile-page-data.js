import { Meteor } from 'meteor/meteor';
import isUndefinedOrNull from '/imports/check/is-undefined-or-null';

const fetchUserProfilePageData = ({ location }) => {
    const urlMatch = location.pathname.match(/users\/.+\/profile/);
    if (!isUndefinedOrNull(urlMatch)
        && urlMatch.length === 1) {
        const userId = urlMatch[0].split('/')[1];
        const userProfile = Meteor.call('get-user-profile', userId);
        return { userProfile };
    }
    return {};
};

export default fetchUserProfilePageData;