import React from 'react';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components'
import { configureStore } from '/imports/ui/redux-store';
import App from '/imports/server/server-side-rendering/app';
import fetch from '/imports/server/server-side-rendering/data-fetchers/fetch';

onPageLoad((sink) => {
    const initialState = fetch({ location: sink.request.url });
    const store = configureStore(initialState);
    const sheet = new ServerStyleSheet()

    sink.renderIntoElementById('app', renderToString(sheet.collectStyles(<App store={store} location={sink.request.url} />)));

    const styleTags = sheet.getStyleTags();

    const helmet = Helmet.renderStatic();
    sink.appendToHead(helmet.meta.toString());
    sink.appendToHead(helmet.title.toString());
    sink.appendToHead(helmet.link.toString());
    sink.appendToHead(styleTags);

    sink.appendToBody(`
        <script>
        window.__SSR__ = true;
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')};
        </script>
    `);
});