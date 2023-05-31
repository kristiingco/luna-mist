import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import { ReactComponent as MoonLogo } from "../../assets/logo.svg";
import { signOutUser } from "../../utils/Firebase";

import "./Navigation.scss";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <MoonLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
