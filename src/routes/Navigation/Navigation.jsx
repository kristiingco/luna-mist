import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as MoonLogo } from "../../assets/logo.svg";

import "./Navgiation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <MoonLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
