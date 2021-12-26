import { Home } from "home/Home";
import { Login } from "login/Login";
import About from "pages/About";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "_components/PrivateRoute";

import { history } from "_helpers";

function RouteTables() {
  return (
    <Routes history={history}>
      <Route
        exact={true}
        path="/"
        element={
          // <PrivateRoute>
          <Home />
          // </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RouteTables;
