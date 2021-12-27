import { Login } from "login/Login";
import About from "pages/About";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { history } from "_helpers";
import Layout from "_components/layout/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "home/Home";

function RouteTables() {
  return (
    <Routes history={history}>
      <Route
        exact={true}
        path="/"
        element={
          // <PrivateRoute>
          <Layout>
            <Home />
          </Layout>
          // </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </Routes>
  );
}

export default RouteTables;
