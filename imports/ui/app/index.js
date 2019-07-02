import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from '/imports/ui/redux-store';
import Routes from '/imports/ui/routes';
import '/imports/ui/meteor-hooks/account';
import ThemeProvider from '/imports/ui/components/theme-provider';
import loadLoggedInUserReduxAction from './load-logged-in-user-redux-action';

class App extends React.Component {

    componentDidMount() {
        loadLoggedInUserReduxAction();
    }

    render() {
        return (
            <Provider
                store={configureStore(window.__PRELOADED_STATE__ || {})}
            >
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