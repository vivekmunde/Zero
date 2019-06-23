import { Meteor } from 'meteor/meteor';
import isUndefined from '/imports/check/isUndefined';
import isNull from '/imports/check/isNull';

const fetchUserProfilePageData = ({ location }) => {
    const urlMatch = location.pathname.match(/users\/.+\/profile/);
    if (!isUndefined(urlMatch)
        && !isNull(urlMatch)
        && urlMatch.length === 1) {
        const userId = urlMatch[0].split('/')[1];
        const userProfile = Meteor.call('get-user-profile', userId);
        return { userProfile };
    }
    return {};
};

export default fetchUserProfilePageData;