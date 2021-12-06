import styled from 'styled-components';

import {
	colors,
	Container,
	LogoContainer,
	LogoText,
	Button
} from '../../styles/globalStyles';

const { primary, lightGrey, darkGrey } = colors;

export const SignUpSection = styled.section`
	min-height: 100vh;
	background-color: ${lightGrey};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SignUpContainer = styled(Container)`
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  li{
	font-size:1.2rem;
	padding-top: .2rem;
	background-color:rgba(245, 153, 39, 0.54) !important;
	border-radius: 10px;
	margin-top:3px;
	text-align:center;
}
h3{
	margin-top:10px;
}
ul button {
	font-size:1.2rem;
	padding-top: .2rem;
	background-color:transparent;
	border-radius: 10px;
	margin-top:3px;
	text-align:center;
	width:100%;

}
ul button li:hover{
	background-color:lightblue !important;
}
ul{
	overflow-y:scroll;
	height:270px;
}
`;

export const HeaderContainer = styled(LogoContainer)`
  width: 25rem;
  height: 5.5rem;
  color: ${primary};

	svg{
		width: 7rem;
	}
`;

export const HeaderText = styled(LogoText)`
  font-size: 5rem;
`;

export const OrContainer = styled.div`
	width: 100%;
	margin-top: 3rem;
	display: flex;
`;

export const OrBorder = styled.div`
	height: 2px;
	flex: 1 0 0;
	background-color: ${darkGrey};
	transform: translateY(2.1rem);
`;

export const OrText = styled.p`
	padding: 1rem;
	color: ${darkGrey};
	text-align: center;
`;

export const Form = styled.form`width: 100%;`;

export const SignUpButton = styled(Button)`
	margin-top: 3rem;
	width: 100%;

	&:hover{
		transform: translateY(-3px)
	}
`;

export const LoginMessage = styled.p`
	margin: 3rem 0;
	text-align: center;
	font-size: 1.8rem;

	a {
		color: ${primary};
		font-size: 1.8rem;
		padding: 0;
	}
`;

export const InputRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const InputItem = styled.div`width: 48%;`;

export const SecondInput = styled.div`width: 45%;`;

export const ErrorMessage = styled.p`
	color: #ff0000;
	margin-top: 1rem;
`;
export const TagSelector = styled.div`
li{
	
	padding-top: .2rem;
	background-color:rgba(245, 153, 39, 0.54) !important;
	border-radius: 10px;
	margin-top:3px;
	text-align:center;
}


`;

export const TagSet = styled.li`
font-size:1.2rem;
padding-top: .2rem;

border-radius: 10px;
margin-top:3px;
text-align:center;
`;
export const SelList = styled.div`
	

	width:50%;

display:inline-block !important;
button{
	border:none;
}
li{
	font-size:1.4rem !important;
}

`;


export const TagList = styled.div`

	display:inline-block!important;
	width:50% !important;
	div{
		width:51%!important;
	}
	button{
		border:none;
	}

	

`;


export const TagContainer = styled.div`
 width:30vw;
 aligh-content:center;
h3{
	font-size: 2.5rem;
}
li{
	width:60%;
	margin-left:20%;
}
`