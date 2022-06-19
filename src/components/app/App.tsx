import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { CookieProducts } from '../../pages/cookie/cookie';
import { Details } from '../../pages/details/details';
import { Home } from '../../pages/home/home';
import { MilkProducts } from '../../pages/milk/milk';
import { loadProduct } from '../../reducers/products/action-creator';
import { HttpStoreProducts } from '../../services/http-store-products';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const apiProducts = useMemo(() => new HttpStoreProducts(), []);

    useEffect(() => {
        apiProducts.getAllProducts().then((products) => {
            dispatch(loadProduct(products));
        });
    }, [dispatch, apiProducts]);
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
                <Route path="/details/:id" element={<Details />}></Route>
            </Routes>
        </div>
    );
}

export default App;
