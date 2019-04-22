import React, { Component } from "react";
import Nav from "../Nav/Nav";

class Upload extends Component {
	uploadWidget = () => {
		window.cloudinary.openUploadWidget(
			{
				cloud_name: "dnnsgy24u",
				upload_preset: "zra6l1tw",
				tags: ["miniflix"],
				sources: [
					"local",
					"url",
					"google_photos",
					"facebook",
					"image_search"
				]
			},
			function(error, result) {
				console.log(
					"This is the result of the last upload",
					result
				);
			}
		);
	};

	render() {
		return (
			<div>
				<Nav />
				<h3 className="text-center">
					Upload your 20-second Video in a jiffy
				</h3>
				<hr />

				<div className="col-sm-12">
					<div className="jumbotron text-center">
						<button
							className="btn btn-lg btn-info"
							onClick={
								this
									.uploadWidget
							}
						>
							Upload Video
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Upload;
