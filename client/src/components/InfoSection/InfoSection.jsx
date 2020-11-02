import React from 'react';

import {
	InfoSec,
	InfoContainer,
	InfoRow,
	Column1,
	Column2,
	ImgWrapper,
	Img,
	Header,
	Description
} from './InfoSection.elements';

const InfoSection = ({ header, description, img, alt }) => {
	return (
		<InfoSec>
			<InfoContainer>
				<InfoRow>
					<Column1>
						<ImgWrapper>
							<Img src={img} alt={alt} />
						</ImgWrapper>
					</Column1>
					<Column2>
						<Header>{header}</Header>
						<Description>{description}</Description>
					</Column2>
				</InfoRow>
			</InfoContainer>
		</InfoSec>
	);
};

export default InfoSection;
