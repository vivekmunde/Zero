import { Meteor } from 'meteor/meteor';
import React from 'react';
import reactLoadable from 'react-loadable';

const ErrorMessage = ({ error }) => {
    console.error(error);

    if (Meteor.isProduction) {
        return null;
    }

    return (
        <span>Async - load error!</span>
    );
};

const Loading = ({ error }) => (
    error
        ? <ErrorMessage error={error} />
        : null
);

const loadable = (args) => reactLoadable({
    loading: Loading,
    ...args,
});

export default loadable;