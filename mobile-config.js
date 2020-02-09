App.accessRule('http://*/*', { type: 'navigation' });
App.accessRule('https://*/*', { type: 'navigation' });
App.configurePlugin('cordova-plugin-googleplus', {
    REVERSED_CLIENT_ID: 'com.googleusercontent.apps.57238486741-9vp8b5ror4qetn6mflfbfp18snm6nshv'
});