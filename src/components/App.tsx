import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { MainPage } from "@@pages";

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </HashRouter>
    );
};

export default hot(App);
