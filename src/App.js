import React from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import Makeup from './Components/Makeup';
import Home from "./Components/Home";
import Promotion from "./Components/Promotion";
import './App.css';

function App() {

  
  return <Router>
      <nav>
        <div className="nav-container">
        <Link to="/" className="link">{('Home')}</Link>
        <Link to="/makeup" className="link">{('Makeup')}</Link>
        <Link to="/promotion" className="link">{('Promotion')}</Link>
        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/promotion" element={<Promotion/>}/>
      </Routes>
    </Router>
}

export default App;