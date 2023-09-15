import { useOdontoStates } from '../Context/Context';
import Card from '../Components/Card';

const Home = () => {
  const { state } = useOdontoStates();

  const renderDentists = () => {
    if (state.dentists.length === 0) {
      return <p>No dentists available.</p>;
    }

    return state.dentists.map((dentist) => (
      <Card dentist={dentist} key={dentist.id} />
    ));
  };

  return (
    <>
      <h1>Home</h1>
      <div className='card-grid'>{renderDentists()}</div>
    </>
  );
};

export default Home;