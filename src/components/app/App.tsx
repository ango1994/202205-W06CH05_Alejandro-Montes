import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { CookieProducts } from '../../pages/cookie/cookie';
import { Home } from '../../pages/home/home';
import { MilkProducts } from '../../pages/milk/milk';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Milk and cookies</h1>
            <Link to="/Milk">Milk</Link>
            <Link to="/">Ofertas</Link>
            <Link to="/Cookies">Cookies</Link>
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="/Milk" element={<MilkProducts />}></Route>
                <Route path="/Cookies" element={<CookieProducts />}></Route>
            </Routes>
        </div>
    );
}

export default App;
