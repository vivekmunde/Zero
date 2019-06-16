import { Meteor } from 'meteor/meteor';
import React from 'react';
import reactLoadable from 'react-loadable';

const Loading = () => null;

const ErrorMessage = ({ error }) => {
    console.error(error);

    if (Meteor.isProduction) {
        return null;
    }

    return (
        <span>Async - load error!</span>
    );
};

const loadable = (args) => reactLoadable({
    loading: ({ error }) => (
        error
            ? <ErrorMessage error={error} />
            : <Loading />
    ),
    ...args,
});

export default loadable;