import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { MainPage, Page1, Page2, Page3 } from "@@pages";

export const App: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
            </Switch>
        </HashRouter>
    );
};

export default hot(App);
