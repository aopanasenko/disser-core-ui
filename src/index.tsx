import * as React from "react";
import { render } from "react-dom";
import App from "@@components/App";
import "./global.css";

try {
    render(
        <App />,
        document.getElementById("app")
    );
} catch (err) {
    console.log(err);
}
