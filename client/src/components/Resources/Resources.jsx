import React from 'react';
import { ResourceCard } from '../index';
import { ResourceContainer } from './Resources.elements';

const Resources = ({ updateFlag, setUpdateFlag, resources }) => {
	return (
		<ResourceContainer>
			{resources.map((resource) => (
				<ResourceCard
					key={resource.id}
					{...resource}
					showButtons
					showType
					showDates
					showDescription
					setUpdateFlag={setUpdateFlag}
					updateFlag={updateFlag}
				/>
			))}
		</ResourceContainer>
	);
};

export default Resources;
