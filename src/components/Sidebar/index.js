import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from "../../assets/images/A.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>{
    return <>
    <div className='nav-bar'>
        <Link className='logo' to='/Portfolio/'>
            <img src={LogoS} alt='logo'></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/Portfolio/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/Portfolio/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/aqeel-abbas-189054230/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Ghostofam'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/aqeel._.abbas/'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
    </>
}

export default Sidebar