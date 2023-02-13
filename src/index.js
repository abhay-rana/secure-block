import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "reducers/index";

import "./styles/global.css";

import App from "./App";
import Home from "pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
