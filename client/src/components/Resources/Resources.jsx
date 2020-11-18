import React from 'react';
import { useSelector } from 'react-redux';
import { ResourceCard } from '../index';
import { ResourceContainer } from './Resources.elements';

const Resources = () => {
	const { user } = useSelector((state) => state.userDetail);
	const { Resources } = user;

	return (
		<ResourceContainer>
			{Resources.map((resource) => (
				<ResourceCard
					key={resource.id}
					{...resource}
					showButtons
					showType
					showDates
					showDescription
				/>
			))}
		</ResourceContainer>
	);
};

export default Resources;
