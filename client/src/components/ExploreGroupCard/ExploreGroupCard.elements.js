import styled from 'styled-components';

import { colors, ActionButton } from '../../styles';

const { primary, mediumGrey, darkGrey } = colors;

export const ExploreCard = styled.div`
	display: inline;
	justify-content: space-between;
	height: 8rem;
	
	margin-bottom: 1rem;
	margin-left: -5rem;
	padding: 1rem;
	width:100%;
	
`;
export const Headline = styled.div`
	display: flex;
	justify-content: space-between;
	height: 8rem;
	
	margin-bottom: 1rem;
	// margin-left: -5rem;
	padding: 1rem;
	width:100%;
`;
export const FavedBlk = styled.div`
margin-top:2rem;
display: block;
right:2%;
bottom:5%;
justify-content: space-between;
height: 15rem;
border:5px solid ${darkGrey};
border-radius:10px;
border-bottom: 1px solid ${mediumGrey};
margin-bottom: 1rem;
font-size:3vh;
animation: .2s ease-in 0s 1 slideIn;


padding: 1rem 4rem 1rem 4rem;
width:30%;
z-index:+3;
background-color:${mediumGrey};
position:absolute;
text-align:center;
-webkit-box-shadow: 0px 10px 28px -3px rgba(0,0,0,0.62); 
box-shadow: 0px 10px 28px -3px rgba(0,0,0,0.62);

span{
	color:red;
	
}


@keyframes slideIn {
	0% {
	  transform: translateX(200%);
	  transform: translateY(200%);
	}
	
	100%{
		transform:translateX(0);
		transform: translateY(0);
	}
  }

}
`;
export const SubRow = styled.div`
	margin-top:2rem;
	display: block;
	margin-left:24%;
	top:25%;
	justify-content: space-between;
	height: 37rem;
	border:5px solid ${darkGrey};
	border-radius:30px;
	border-bottom: 1px solid ${mediumGrey};
	margin-bottom: 1rem;
	font-size:3vh;
	animation: .2s ease-out 0s 1 slideUp;
	padding: 1rem 4rem 1rem 4rem;
	width:30%;
	z-index:+3;
	background-color:${mediumGrey};
	position:absolute;
	text-align:center;
	-webkit-box-shadow: 0px 10px 28px -3px rgba(0,0,0,0.62); 
box-shadow: 0px 10px 28px -3px rgba(0,0,0,0.62);
	a{
		color:blue;
		text-decoration:underline;
	}
	a:hover{
		color:#726dbf;
		text-decoration:underline;
	}
	h2{
		text-align:center;
		color:red !important;
		font-size:2.5rem;
	}
	h5{
		text-align:left;
	}
	ul{
		
		text-align:center;
		margin-bottom:10px;	
		
	}
	li{
		font-size:1.8rem;
		padding-top: .2rem;
		background-color:rgba(245, 153, 39, 0.54) !important;
		border-radius: 10px;
		margin-top:3px;
		text-align:center;
		width:80%;
		margin-left:10%
	}
	button{
		margin-top:3%;
		padding:.5rem;
		font-size:2rem;
		background-color: ${primary};
		border-radius: 20px;
		color: ${mediumGrey};
	}
	p{
		text-align:left;
	}

	@keyframes slideUp {
		0% {
		  transform: translateY(-100%);
		}
		100% {
		  transform: translateY(0);
		}
	  }
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;
	width: 50% !important;
	
`;


export const IconContainer = styled.div`
	color: ${primary};
	border-radius: 50%;
	width: 6rem;
	background-color: ${mediumGrey};
	height: 6rem;
	margin-right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 4rem;
		height: 4rem;
	}
`;

export const Text = styled.div`
	color: ${darkGrey};
	
	h2 {
		font-size: 1.6rem;
	}

	p {
		font-size: 1.3rem;
		padding-top: 0.2rem;
	}
	li{
		font-size:1.2rem;
		padding-top: .2rem;
		background-color:rgba(245, 153, 39, 0.54) !important;
		border-radius: 10px;
		margin-top:3px;
		text-align:center;
	}
	
`;

export const ButtonGroup = styled.div`
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width:10% !important;
	margin-right:15px;
	margin-left: 10px;
`;

export const Button = styled(ActionButton)`
  font-size: 1.6rem;
  padding: 1.3rem;
  width: 100%;
`;
