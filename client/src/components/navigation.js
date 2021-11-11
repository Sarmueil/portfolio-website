import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter'; 

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/about-us' exact>
                  About
                </NavLink>
              </li>
              {/* <li>
                <NavLink to='/approach' exact>
                  Projects
                </NavLink>
              </li> */}
              <li>
                <NavLink to='/services' exact>   
                 Experience
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                Skills
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>

            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Get in Touch</li>
                <li>
                  <NavLink to='/contact' exact>
                   Hire Me
                  </NavLink>
                </li>
                <li>
                   <div className="icons">
                     <a href="https://github.com/Sarmueil"><GitHubIcon className="icons_a"/></a>
                   <a href="https://www.linkedin.com/in/adebisi-samuel-b8a72b191/"><LinkedInIcon className="icons_a"/></a>
                   <a href="https://www.instagram.com/sarmuiel/"><InstagramIcon className="icons_a"/></a>
                   <NavLink to='/contact' exact><EmailIcon className="icons_a"/></NavLink>
                   <a href="https://www.instagram.com/sarmuiel/"><TwitterIcon className="icons_a"/></a>
                 </div>
                 <div>

                 </div>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Based in</li>
                <li>Asajon way, sangotedo</li>
                <li>Lagos State,</li>
                <li>Nigeria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
