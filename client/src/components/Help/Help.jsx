import React, {useEffect, useState} from 'react';
import { HelpContainer, SubtitleContainer } from './Help.elements';


const Help = () => {
	return (
		<HelpContainer >
			<h1>Help</h1>
			<SubtitleContainer>
				<h3>Groups:</h3>
				<p> A group is used for grouping resources together. For example, if you have a Calculus group, you could add calculus related resources to the group. You have to create a group first before adding a resource to it.</p>
			</SubtitleContainer>
			<SubtitleContainer>
				<h3>Resources:</h3>
				<p>A resource is used for links, files, and text that can be added to a group, assignment, or lesson. They can be used for information about a subject. Related and helpful links can be attached. A file can be attached which may or may not be related to a class. </p>
			</SubtitleContainer>
			<SubtitleContainer>
				<h3>Assignments:</h3>
				<p>An assignment is how a user can assign a task to another user. It has a way to send the recipient attachments (a Resource). Users will be able to submit an assignment they receive by using a text editor or by attaching another resource. An assignment has an open date, a due date, and a close date. The user that shares the assignment can grade the assignment and the recipient will be able to see the change. The page itself will show the user’s created assignments and their shared assignments. A user can edit, delete, or share an assignment. </p>
			</SubtitleContainer>
			<SubtitleContainer>
				<h3>Explore:</h3>
				<p>The explore page is used to view other users and send them friend requests. You can click on another user to view their profile. If you click “Connect,” you will send a friend request to that user. </p>
			</SubtitleContainer>
			<SubtitleContainer>
				<h3>Friends:</h3>
				<p>The friends page shows the user their current and pending friends. A user is able to share Groups, Resources, Assignments, and Lessons with a friend. If you click on a friend’s profile, you can remove them from your friends list.</p>
			</SubtitleContainer>
			<SubtitleContainer>
				<h3>Lessons:</h3>
				<p>The lessons page shows the user their created lessons and any shared lessons. A user can view their lesson and edit or delete them. A user cannot edit their shared lessons. Lessons are used for sharing any lectures or notes with another user. A lesson has a built in text editor which can be used to format how the lesson looks.</p>
			</SubtitleContainer>
			<SubtitleContainer>
				<h3>Github Reference</h3>
				<u><p><a href="https://github.com/briangormanly/outfox" target="_blank">Outfox Github</a></p></u>
			</SubtitleContainer>
		</HelpContainer>
		
			
		
	);
};

export default Help;
