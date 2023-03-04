import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../auth/signUp";
import ApiTest from "../api-test";
import Login from "../auth/login";
import Protected from "./protected-route";
import Home from "../Home";
import Header from "../components/header";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dummy-user"
          element={
            <Protected>
              <ApiTest />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
