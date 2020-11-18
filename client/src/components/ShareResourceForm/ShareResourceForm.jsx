import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import friendService from '../../services/friends';

import FormInput from '../Form-Input/Form-Input';
import { ActionButton } from '../../styles';

const ShareResourceForm = ({ resourceID, setShowModal }) => {
	const { friendList } = useSelector((state) => state.friendDetail);
	console.log(friendList);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Fragment>
			<h1>Choose friends to share with:</h1>
			<form onSubmit={handleSubmit}>{/*  */}</form>
		</Fragment>
	);
};

export default ShareResourceForm;
