import { Route, Routes, Navigate } from "react-router-dom";

import RouteTables from "_components/routes/RouteTables";

export { App };

function App() {
  return (
    <div className="app-container bg-light">
      <RouteTables />

      {/* <Navigate to="/" /> */}
    </div>
  );
}
