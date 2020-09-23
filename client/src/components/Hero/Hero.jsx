import React from 'react';

import {
	HeroSection,
	HeroContainer,
	HeroRow,
	HeroColumn1,
	HeroColumn2,
	Img,
	ImgWrapper,
	HeroHeader,
	HeroDescription,
	HeroButton
} from './Hero.elements';

const Hero = ({ img, alt, header, description, buttonLabel }) => {
	return (
		<HeroSection>
			<HeroContainer>
				<HeroRow>
					<HeroColumn1>
						<HeroHeader>{header}</HeroHeader>
						<HeroDescription>{description}</HeroDescription>
						<HeroButton to="/signin">{buttonLabel}</HeroButton>
					</HeroColumn1>
					<HeroColumn2>
						<ImgWrapper>
							<Img src={img} alt={alt} />
						</ImgWrapper>
					</HeroColumn2>
				</HeroRow>
			</HeroContainer>
		</HeroSection>
	);
};

export default Hero;
