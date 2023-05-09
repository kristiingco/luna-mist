import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as MoonLogo } from "../../assets/logo.svg";

import "./Navigation.scss";

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
          <Link to='/sign-in' className='nav-link'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
