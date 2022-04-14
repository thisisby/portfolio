import React from "react";
import MyRoutes from "./features/MyRoutes";
import Sidebar from "./features/Sidebar";

function App() {
  return (
    <div className="px-5 py-16 md:px-12 lg:px-48 xl:px-80 flex flex-col md:flex-row">
      <Sidebar />
      <MyRoutes />
    </div>
  );
}

export default App;
