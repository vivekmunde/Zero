const configureSocialAuthService = () => {
    console.log('Configuring social auth service for Facebook');
    ServiceConfiguration.configurations.upsert({
        service: "facebook"
    }, {
            $set: {
                appId: Meteor.settings.facebook.appId,
                secret: Meteor.settings.facebook.secret
            }
        });

    console.log('Configuring social auth service for Google');
    ServiceConfiguration.configurations.upsert({
        service: "google"
    }, {
            $set: {
                clientId: Meteor.settings.google.clientId,
                secret: Meteor.settings.google.secret,
            }
        });
};

export default configureSocialAuthService;