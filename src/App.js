import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { requireAuth } from "./utils/AuthService";
import Upload from "./components/Upload/Upload";
import Display from "./components/Display/Display";
import Callback from "./components/Callback/Callback";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" component={Display} />
					<Route
						path="/upload"
						component={Upload}
						onEnter={requireAuth}
					/>
					<Route
						path="/callback"
						component={Callback}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
