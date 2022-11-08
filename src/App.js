import "./App.css";
import React from 'react';
import Header from './compornents/Header';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Home from './compornents/Home';
// import Menu from './compornents/Menu';
import Map from './compornents/Map';
import Footer from './compornents/Footer'

const App = () => {
  return (
    <div className='App'>
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </HashRouter>

      <Footer />
      
    </div>
  )
}

export default App;