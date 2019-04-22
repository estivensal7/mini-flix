import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, browserHistory } from "react-router";
import Upload from "./components/Upload/Upload";
import Display from "./components/Display/Display";
import Callback from "./components/Callback/Callback";
import { requireAuth } from "./utils/AuthService";
import "./App.css";

const Root = () => {
	return (
		<div className="App">
			<Router history={browserHistory}>
				<Route path="/" component={Display} />
				<Route
					path="/upload"
					component={Upload}
					onEnter={requireAuth}
				/>
				<Route path="/callback" component={Callback} />
			</Router>
		</div>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
