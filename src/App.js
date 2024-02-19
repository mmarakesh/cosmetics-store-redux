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
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  
  return <Router>
      <nav>
        <div className="nav-container">
        <Link to="/" className="link">{t('Home')}</Link>
        <Link to="/makeup" className="link">{t('Makeup')}</Link>
        <Link to="/promotion" className="link">{t('Promotion')}</Link>
        </div>

        <div className="btn-container">
        <button className="btn-lang" onClick={toggleLang}>
        {i18n.language === 'en' ? 'ru' : 'en'}
        </button>
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