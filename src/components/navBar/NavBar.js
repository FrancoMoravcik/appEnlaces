/***** IMPORTACIONES *****/
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faUser} from '@fortawesome/free-solid-svg-icons'


/***** LOGICA *****/

const NavBar = () => {

return (
    <nav>
        <ul>
            <li><span className='spanIcono spanIcono1'><img className="imgLogo" src="img/logoEnlace.png" alt="logo"></img></span><span className='spanPalabra spanPalabra1'>Devlinks</span></li>

            <li><Link className="li li2" to='/links'><span className='spanIcono spanIcono2'><FontAwesomeIcon icon={faLink} /></span><span className='spanPalabra spanPalabra2'>Links</span></Link></li>

            <li><Link className="li" to='/profile'><span className='spanIcono spanIcono3'><FontAwesomeIcon icon={faUser} /></span><span className='spanPalabra spanPalabra3'>Profile Details</span></Link></li>

            <li><Link className="li li4" to='/preview'><span className='spanIcono spanIcono4'><img className="imgLogo2" alt="" src="img/ojo.png"aria-valuetext="logo"></img></span><span className='spanPalabra spanPalabra4'>Preview</span></Link></li>
        </ul>
    </nav>
)
}

/***** EXPORTACIONES *****/

export default NavBar