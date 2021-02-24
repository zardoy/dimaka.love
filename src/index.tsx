import ReactDOM from "react-dom";
import React from "react";

import "./root.css";
import "./MyFontsWebfontsKit.css";

import App from "./App";

if (process.env.NODE_ENV === "development") console.clear();

ReactDOM.render(<App />, document.getElementById("root"));