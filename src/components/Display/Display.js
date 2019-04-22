import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { CloudinaryContext, Video } from "cloudinary-react";
import axios from "axios";
import { Share } from "react-twitter-widgets";

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

				<div className="col-sm-6 mx-auto">
					<CloudinaryContext cloudName="dnnsgy24u">
						{videos.map((data, index) => (
							<div
								className="col-sm-12"
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
								</div>
								<div>
									Created
									at{" "}
									{
										data.created_at
									}
								</div>
								<Share
									url={`http://res.cloudinary.com/unicodeveloper/video/upload/${
										data.public_id
									}.mp4`}
								/>
							</div>
						))}
					</CloudinaryContext>
				</div>
			</div>
		);
	}
}

export default Display;
