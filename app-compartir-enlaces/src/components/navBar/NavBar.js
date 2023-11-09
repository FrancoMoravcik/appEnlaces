/***** IMPORTACIONES *****/
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faUser, faEye } from '@fortawesome/free-solid-svg-icons'


/***** LOGICA *****/

const NavBar = () => {

return (
    <nav>
        <ul>
            <li><span className='spanIcono spanIcono1'><FontAwesomeIcon icon={faLink}/></span><span className='spanPalabra'>Devlinks</span></li>

            <li><Link to='/links'><span className='spanIcono'><FontAwesomeIcon icon={faLink} /></span><span className='spanPalabra'>Links</span></Link></li>

            <li><Link to='/profile'><span className='spanIcono'><FontAwesomeIcon icon={faUser} /></span><span className='spanPalabra'>Profile Details</span></Link></li>

            <li><Link to='/preview'><span className='spanIcono'><FontAwesomeIcon icon={faEye} /></span><span className='spanPalabra'>Preview</span></Link></li>
        </ul>
    </nav>
)
}

/***** EXPORTACIONES *****/

export default NavBar