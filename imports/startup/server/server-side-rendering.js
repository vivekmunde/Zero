import React from 'react';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { configureStore } from '../../ui/redux-store';
import Routes from './routes';

onPageLoad((sink) => {
    const context = {};

    const store = configureStore({});

    const App = props => (
        <Provider store={store}>
            <StaticRouter location={props.location} context={context}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const preloadedState = store.getState();

    sink.renderIntoElementById('app', renderToString(<App location={sink.request.url} />));

    const helmet = Helmet.renderStatic();
    sink.appendToHead(helmet.meta.toString());
    sink.appendToHead(helmet.title.toString());
    sink.appendToHead(helmet.link.toString());

    sink.appendToBody(`
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    `);
});