import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useOdontoStates } from '../Context/Context';

const Card = ({ dentist }) => {
  const { dispatch } = useOdontoStates();

  const addFav = useCallback(() => {
    dispatch({ type: 'ADD_FAV', payload: dentist });
  }, [dispatch, dentist]);

  return (
    <div className="card">
      <img src="images/doctor.jpg" alt="" />
      <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <h4>{dentist.username}</h4>
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;