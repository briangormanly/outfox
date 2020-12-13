import React from 'react';

import {
	AboutSection,
	FoxBanner,
	AboutSubTitle,
	AboutQuote,
	AboutText,
	AboutList,
	AboutListItem,
	AboutCentered
} from './About.elements';

import {
	HeroButton,
	buttonLabel
} from '../Hero/Hero.elements'

import BannerImage from '../../assets/outfox-banner-1280x720.png';

export const About = () => {
	return (
		<AboutSection>
			<FoxBanner src={BannerImage} />
			<AboutSubTitle>For Lovers of Wisdom</AboutSubTitle>
			<AboutQuote>“We should not trust the masses that say only the free can be educated, but rather the lovers of wisdom that say only the educated can be free”.  - Epictetus</AboutQuote>
			<AboutText>Learning is at our core, we do it everyday.  The artifacts of what we learn, our notes, papers, links we find, videos we watch, blogs we read, spreadsheets, test results, assignments, books, and our lifetime of interactions with teachers and mentors are spread across the physical and digital world.</AboutText>
			<AboutText>When we graduate, finish an online course, complete a training seminar, attend a conference or even just switch to a new method of managing our notes and documents we lose something, pieces of our hard work scattered, unorganized, out of reach and eventually lost.  Often years later we find ourselves frustrated and retracing our steps though a past learning or research journey only to realize a crucial piece cannot be located or reconstructed.</AboutText>
			<AboutText>We need a single, open, collaborative and forever free environment where we can conduct our learning, research our ideas, and remember all the lessons we learn, forever.  An environment that is not owned by an academic institution or corporation but by everyone.  Guided only by virtue and principles:</AboutText>
		
			<AboutText><strong>The perfect learning platform:</strong></AboutText>
			<AboutList>
				<AboutListItem>Is accessible: Free and open source and will remain so forever.</AboutListItem>
				<AboutListItem>User, not institution centric: Lifelong learners require a lifelong system that follows them.</AboutListItem>
				<AboutListItem>Is flexible: So different types of learners can work however they do best</AboutListItem>
				<AboutListItem>Is social: Opening a safe central hub of learning means collaboration and sharing of information can be easier than ever.</AboutListItem>
				<AboutListItem>Is safe: Your data will never be used against you, only for you. it will not be sold or used for marketing and is only seen by people you authorize.</AboutListItem>
				<AboutListItem>Is smart: It is intuitive to use and can suggest helpful resources getting you closer to the answers you seek</AboutListItem>
				<AboutListItem>Listens: To its users, the sum of its parts and always remains a force for good.</AboutListItem>
			</AboutList>
			<AboutText>Be a part of the change, outfox the past and join us today </AboutText>
			<AboutCentered>
				<HeroButton to="/signup">Join Outfox!</HeroButton>
			</AboutCentered>
			
			<AboutText>&nbsp;</AboutText>
		</AboutSection>
	);
};

export default About;
