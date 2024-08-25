import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="alvaro" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          to={"https://www.linkedin.com/in/alvaro-javier-chagas-capurro/"}
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          to={"https://github.com/Alvarojavier22"}
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          to={"https://api.whatsapp.com/send?phone=59891445363&text=Alvaro"}
        >
          <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          to={"skype:live:alvarojavierchagas"}
        >
          <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
        </Link>
      </li>
    </ul>
  </div>
)

export default Sidebar
