import React from "react";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-20 items-center justify-between gap-7">
      <Home />
    </div>
  );
}

export default App;