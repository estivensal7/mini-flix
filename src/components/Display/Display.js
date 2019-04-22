import React, { Component } from "react";
import { Link } from "react-router";
import Nav from "../Nav/Nav";
import { isLoggedIn } from "../../utils/AuthService";
import axios from "axios";

class Display extends Component {
	render() {
		return (
			<div>
				<Nav />
				<h3 className="text-center">
					{" "}
					Latest Videos on MiniFlix{" "}
				</h3>
				<hr />

				<div className="col-sm-12" />
			</div>
		);
	}
}

export default Display;
