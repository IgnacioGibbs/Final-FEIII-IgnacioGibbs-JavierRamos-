import { useEffect, useState } from 'react';
import { useOdontoStates } from '../Context/Context';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { state, dispatch } = useOdontoStates();
  const { id } = useParams();
  const { name, email, phone, website } = state.dentist;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDentistData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = response.data;
        dispatch({ type: 'GET_DENTIST', payload: data });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dentist data:', error);
        setLoading(false);
      }
    };

    fetchDentistData();
  }, [dispatch, id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className='detail'>
        <h1>Detail Dentist {id}</h1>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{website}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail;