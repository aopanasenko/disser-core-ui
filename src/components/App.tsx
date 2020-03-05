import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { MainPage, SmartHome, Agriculture, Industry, History, Transport } from "@@pages";

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/smarthome" component={SmartHome} />
                <Route path="/agriculture" component={Agriculture} />
                <Route path="/industry" component={Industry} />
                <Route path="/transport" component={Transport} />
                <Route path="/history" component={History} />
            </Switch>
        </HashRouter>
    );
};

export default hot(App);
