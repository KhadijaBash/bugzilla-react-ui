import React  from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import AllRoutes from "./routes";

const App = ()=>{
    return (
      <div>
        <Navbar />
        {AllRoutes}
      </div>
    );
  }

export default App;
