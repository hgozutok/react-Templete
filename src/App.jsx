import { Route, Routes, Navigate } from "react-router-dom";

import { Nav } from "_components";
import RouteTables from "_components/routes/RouteTables";

export { App };

function App() {
  return (
    <div className="app-container bg-light">
      <Nav />
      <RouteTables />

      {/* <Navigate to="/" /> */}
    </div>
  );
}
