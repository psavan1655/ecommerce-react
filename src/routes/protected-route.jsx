import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../App";

function Protected({ children }) {
  const authData = useContext(ThemeContext);
  console.log(authData, " Authorization Data ============");

  if (!authData?.data) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default Protected;
