import React, { Component } from "react";
import { Link } from "react-router";
import { login, logout, isLoggedIn } from "../../utils/AuthService";
import "../../App.css";

class Nav extends Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-light bg-dark">
				<div className="navbar-header">
					<Link
						className="navbar-brand text-white"
						to="/"
					>
						Miniflix
					</Link>
				</div>
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link
							to="/"
							className="text-white"
						>
							All Videos
						</Link>
					</li>
					<li className="nav-item">
						{isLoggedIn() ? (
							<Link
								to="/upload"
								className="text-white"
							>
								Upload Videos
							</Link>
						) : (
							""
						)}
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right mr-sm-2">
					<li>
						{isLoggedIn() ? (
							<button
								className="btn btn-danger log"
								onClick={() =>
									logout()
								}
							>
								Log out{" "}
							</button>
						) : (
							<button
								className="btn btn-info log"
								onClick={() =>
									login()
								}
							>
								Log In
							</button>
						)}
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
