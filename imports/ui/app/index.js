import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, createStore } from 'duxact';
import Routes from '/imports/ui/routes';
import ThemeProvider from '/imports/ui/components/theme-provider';
import LoggedInUserLoader from '/imports/ui/components/logged-in-user-loader';

class App extends React.Component {
    render() {
        return (
            <Provider
                store={createStore(window.__PRELOADED_STATE__ || {})}
            >
                <LoggedInUserLoader />
                <ThemeProvider>
                    <Router>
                        <Routes {...this.props} />
                    </Router>
                </ThemeProvider>
            </Provider >
        );
    }

}

export default App;