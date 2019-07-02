import { Meteor } from 'meteor/meteor';
import React from 'react';
import { hydrate, render } from 'react-dom';
import App from '/imports/ui/app';

Meteor.startup(() => {
    (window.__SSR__ ? hydrate : render)(<App />, document.getElementById('app'));
});