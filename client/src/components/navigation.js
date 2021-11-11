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
                  {/* <NavLink to='/audit' exact>
                    Get a free audit
                  </NavLink> */}
                   <div className="icons">
                   <GitHubIcon className="icons_a"/>
                   <LinkedInIcon className="icons_a"/>
                   <InstagramIcon className="icons_a"/>
                   <EmailIcon className="icons_a"/>
                   <TwitterIcon className="icons_a"/>
                 </div>
                 <div>

                 </div>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Based in</li>
                <li>Asajon way, sangotedo</li>
                <li>Lagos State</li>
                {/* <li>Switzerland</li> */}
              </ul>
              {/* <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul> */}
              {/* <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy & Cookies</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
