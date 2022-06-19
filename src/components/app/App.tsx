import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { getProducts } from '../../data/products';
import { CookieProducts } from '../../pages/cookie/cookie';
import { Home } from '../../pages/home/home';
import { MilkProducts } from '../../pages/milk/milk';
import { loadProduct } from '../../reducers/products/action-creator';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts().then((products) => {
            dispatch(loadProduct(products));
        });
    }, [dispatch]);
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
