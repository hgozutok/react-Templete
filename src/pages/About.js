import React from "react";
import { PrivateRoute } from "_components/PrivateRoute";

function About() {
  return (
    <PrivateRoute>
      <h1>About</h1>
    </PrivateRoute>
  );
}

export default About;
