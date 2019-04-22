import React, { Component } from "react";
import { Link } from "react-router";
import Nav from "../Nav/Nav";
import { isLoggedIn } from "../../utils/AuthService";
import { CloudinaryContext, Transformation, Video } from "cloudinary-react";
import axios from "axios";
import { Cloudinary } from "cloudinary-core";

class Display extends Component {
	state = {
		videos: []
	};

	getVideos() {
		axios.get(
			"http://res.cloudinary.com/dnnsgy24u/video/list/miniflix.json"
		).then(res => {
			console.log(res.data.resources);
			this.setState({ videos: res.data.resources });
		});
	}

	componentDidMount() {
		this.getVideos();
	}

	render() {
		const { videos } = this.state;
		return (
			<div>
				<Nav />
				<h3 className="text-center">
					{" "}
					Latest Videos on MiniFlix{" "}
				</h3>
				<hr />

				<div className="col-sm-12">
					<CloudinaryContext cloudName="dnnsgy24u">
						{videos.map((data, index) => (
							<div
								className="col-sm-4"
								key={index}
							>
								<div className="embed-responsive embed-responsive-4by3">
									<Video
										publicId={
											data.public_id
										}
										width="300"
										height="300"
										controls
									/>
								</div>{" "}
								Created at{" "}
								{
									data.created_at
								}
							</div>
						))}
					</CloudinaryContext>
				</div>
			</div>
		);
	}
}

export default Display;
