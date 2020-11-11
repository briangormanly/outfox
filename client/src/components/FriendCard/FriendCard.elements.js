import styled from 'styled-components';

import {
	ExploreCard,
	ButtonGroup,
	Button
} from '../ExploreUserCard/ExploreUserCard.elements';

export const FriendContainer = styled(ExploreCard)``;

export const FriendButtonGroup = styled(ButtonGroup)`
  width: 40rem;
  display: flex;
  justify-content: flex-end;
`;

export const FriendButton = styled(Button)`
  width: 30%;
  margin-right: 1rem;
`;
