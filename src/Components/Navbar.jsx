
import { Outlet,Link } from 'react-router-dom'
import { ContextGlobal} from './utils/global.context'
import { useContext } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const {dispatch}=useContext(ContextGlobal);
const ChangeTheme =()=>{
  dispatch({type:"TOGGLE_THEME"})
} 
return (

    <div >
    <nav>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>
      <button onClick={ChangeTheme} >Change theme</button>
    </nav>
    <Outlet/>
    </div>

  )
}

export default Navbar