import React from 'react';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { Helmet } from 'react-helmet';
import { configureStore } from '/imports/ui/redux-store';
import App from '/imports/server/server-side-rendering/app';
import fetch from '/imports/server/server-side-rendering/data-fetchers/fetch';

onPageLoad((sink) => {
    const initialState = fetch({ location: sink.request.url });
    const store = configureStore(initialState);

    sink.renderIntoElementById('app', renderToString(<App store={store} location={sink.request.url} />));

    const helmet = Helmet.renderStatic();
    sink.appendToHead(helmet.meta.toString());
    sink.appendToHead(helmet.title.toString());
    sink.appendToHead(helmet.link.toString());

    sink.appendToBody(`
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
        </script>
    `);
});