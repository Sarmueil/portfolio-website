import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className='header'>
      <div className='container'>
       {/* change to flex-end from space-between */}
        <div className='row v-center space-between' style={{justifyContent:'flex-end'}}>
          {/* <div className='logo'>
            <NavLink to='/' exact>
               <img src='/images/logoicon.png' alt='logo' />
            </NavLink>
          </div> */}

          <div style={{display:'flex', alignItems:'center'}}>
          <div className='logo' style={{marginRight:'1.3rem'}}>
            <NavLink to='/' exact>
               <img src='/images/homeicon.png' alt='logo' />
            </NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className='hamburger-menu'>
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}>
              <UpArrow />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
