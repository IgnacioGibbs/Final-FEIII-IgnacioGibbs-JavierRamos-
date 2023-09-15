import { Link } from 'react-router-dom';
import { useOdontoStates } from '../Context/Context'

const Navbar = () => {

  const {dispatch} = useOdontoStates()

  const setTheme = () => {
    dispatch({type: 'SWITCH_THEME'})
  }

  return (
    <nav>
      <h1>Centro Ontológico</h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
      <button onClick={setTheme} className='themeButton'>🌙</button>
    </nav>
  );
};

export default Navbar;