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
import ToggleLang from "./Components/ToggleLang";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  
  return <Router>
      <nav>
        <div className="nav-container">
        <Link to="/" className="link">{t('Home')}</Link>
        <Link to="/makeup" className="link">{t('Makeup')}</Link>
        <Link to="/promotion" className="link">{t('Promotion')}</Link>
        </div>
        <ToggleLang />  
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/promotion" element={<Promotion/>}/>
      </Routes>
    </Router>
}

export default App;