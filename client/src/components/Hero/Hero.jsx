import React from 'react';

import {
	HeroSection,
	HeroContainer,
	HeroRow,
	HeroColumn,
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
					<HeroColumn>
						<HeroHeader>{header}</HeroHeader>
						<HeroDescription>{description}</HeroDescription>
						<HeroButton to="/signin">{buttonLabel}</HeroButton>
					</HeroColumn>
					<HeroColumn>
						<ImgWrapper>
							<Img src={img} alt={alt} />
						</ImgWrapper>
					</HeroColumn>
				</HeroRow>
			</HeroContainer>
		</HeroSection>
	);
};

export default Hero;
