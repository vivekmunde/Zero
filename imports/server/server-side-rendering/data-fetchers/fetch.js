import fetchUserProfilePageData from './fetch-user-profile-page-data';

const fetch = ({ location }) => ({
    ...fetchUserProfilePageData({ location }),
});

export default fetch;