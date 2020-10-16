import React from 'react';

import { HeroSection, Content, HeroButton } from './Hero2.elements';
import WorkSVG from './WorkSVG';

const Hero2 = () => {
	return (
		<HeroSection>
			<Content>
				<div>
					<h1>Everything your LMS should be and more.</h1>
					<p>
						Manage, track, and achieve your learning goals with Outfox LMS. Group and
						share resources with friends. No cost, no expiration, a free lifetime of
						learning.
					</p>
					<HeroButton>Get Started</HeroButton>
				</div>
			</Content>
			<WorkSVG />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#f4f4f4"
					// fill-opacity="1"
					d="M0,160L40,138.7C80,117,160,75,240,69.3C320,64,400,96,480,133.3C560,171,640,213,720,213.3C800,213,880,171,960,176C1040,181,1120,235,1200,218.7C1280,203,1360,117,1400,74.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
				/>
			</svg>

			<div className="fill" />
		</HeroSection>
	);
};

export default Hero2;
