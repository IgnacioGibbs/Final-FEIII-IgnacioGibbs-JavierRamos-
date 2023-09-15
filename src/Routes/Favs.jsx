import { useOdontoStates } from '../Context/Context'
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useOdontoStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {state.favs.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
      </div>
    </>
  );
};

export default Favs;
