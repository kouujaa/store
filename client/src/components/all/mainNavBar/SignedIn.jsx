import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Profile } from "../../svgs/person-circle.svg";
import { ReactComponent as Out } from "../../svgs/door-open.svg";

const SignedIn = ({ signOut, user, toggle }) => {
  // const ourContext = useContext(ProductContext);
  // console.log(ourContext.cart.length);
  return (
    <React.Fragment>
      <NavItem className="left">
        <Link
          onClick={() => {
            toggle();
            signOut();
          }}
          to=""
        >
          <Out className="mr-1" /> LOGOUT
        </Link>
      </NavItem>
      <NavItem className="left">
        <Link
          to="/profilePage"
          onClick={() => {
            toggle();
          }}
        >
          <Profile className="mr-1" />
          {user.lastName.charAt(0).toUpperCase()}
          {user.firstName.charAt(0).toUpperCase()}
        </Link>
      </NavItem>
      {/* <NavItem className="left">
        <Link
          to="/cart"
          onClick={() => {
            toggle();
          }}
        >
          <Cart />
          <span>{ourContext.cart.length}</span> CART
        </Link>
      </NavItem> */}
    </React.Fragment>
  );
};

export default SignedIn;
