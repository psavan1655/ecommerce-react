import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Header = () => {
  const authData = useContext(ThemeContext);

  const handleLogout = () => {
    authData.setData();
    localStorage.removeItem("userToken");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "slateGray",
        color: "white",
        padding: "24px 36px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Logo
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {authData.data ? (
            <div onClick={handleLogout}>LogOut</div>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              SignIn
            </Link>
          )}
        </div>
        <div style={{ marginLeft: "12px" }}>Sign Up</div>
        <div style={{ marginLeft: "12px" }}>Home</div>
      </div>
    </div>
  );
};

export default Header;
