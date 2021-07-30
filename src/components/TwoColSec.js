import React from "react";
import illu from "../images/illu.png";
import google from "../images/google.png";
import skrill from "../images/skrill.png";
import amazon from "../images/amazon.png";

function TwoColSec() {
	return (
		<section className="twoColSec">
			<div className="content">
				<h1>
					Don't worry. <br /> We are here for every solution.
				</h1>
				<p>
					Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon.
					Actually beard single-origin coffee, twee 90's PBR Echo Park
				</p>
				<div className="buttons">
					<button className="btn btn--primary">Get Started</button>
					<button className="btn btn--secondary">
						<div>
							<i className="fas fa-play"></i>
						</div>
						Watch Video
					</button>
				</div>
				<div className="testimonials">
					<img src={skrill} alt="" />
					<img src={amazon} alt="" />
					<img src={skrill} alt="" />
					<img src={google} alt="" />
					<img src={skrill} alt="" />
				</div>
			</div>
			<div className="illuContainer">
				<img className="illu" src={illu} alt="" />
			</div>
		</section>
	);
}

export default TwoColSec;
