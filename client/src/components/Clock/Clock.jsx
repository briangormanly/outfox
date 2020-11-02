import React, { Fragment, useState, useEffect } from 'react';

const Clock = () => {
	const [ time, setTime ] = useState(null);

	useEffect(() => {
		const id = setInterval(() => tick(), 1000);

		return () => clearInterval(id);
	}, []);

	const tick = () => {
		setTime(new Date());
	};

	return (
		<Fragment>
			{time && (
				<span style={{ fontSize: '1.6rem' }}>{time.toLocaleTimeString()}</span>
			)}
		</Fragment>
	);
};

export default Clock;
