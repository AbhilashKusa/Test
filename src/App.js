import React from "react";
import "./App.css";
import { DataProvider } from "./ContextApi/Data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import About from "./Components/About";
import Blog from "./Components/Blog";

import Formvalidation from "./Components/Formvalidation";

function App() {
  return (
    <div className="App">
      <DataProvider>
      <Navibar />
      <Mainpage />
      <About />
      <Formvalidation />
      <Blog />
      </DataProvider>
    </div>
  );
}

export default App;
