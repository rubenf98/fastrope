import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/pages/Homepage";
import Layout from "./components/Layout";

export const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Homepage} />
                </Layout>
            </Switch>
        </Router>
    );
};

export default Routes;
