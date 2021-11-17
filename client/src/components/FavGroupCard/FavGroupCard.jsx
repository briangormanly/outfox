import React ,{useState} from 'react';
import { useHistory, useParams} from 'react-router-dom';
import groupService from '../../services/groups';
import { Card } from './FavGroupCard.elements';

const FavGroupCard = ({ name, description, id }) => {
	const history = useHistory();
	const params = useParams();
    const [visible, setVisible] = useState(true);
	const handleClick = () => {
		history.push(`/user/${params.id}/groups/${id}`);
	};
    const removeFavorite = async () =>{
        console.log("doing stuff to group" + id);
        const resp = await groupService.remFavoriteGroup( params.id, id);
        setVisible(false);
      };
	return (
	visible &&
            <Card>
			<h2>{name}</h2>
			<p>{description}</p>
			<button onClick={handleClick}>View Group</button>
            <button class={"favBtn"}  onClick={removeFavorite}>Remove Favorite</button>
		</Card>
    
        
	);
};

export default FavGroupCard;
