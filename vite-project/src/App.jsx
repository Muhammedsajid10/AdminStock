import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Franchise from './Components/Franchise/Franchise'
import Home from './Home';
import Products from './Components/Products/Products';
import SubProducts from './Components/SubProducts/SubProducts';
import Categoriees from './Components/Categories/Categoriees';
import Pages from './Pages/Pages';
import SubProductView from './Components/SubProducts/SubProductView';
import SubProdStockIN from './Components/SubProdStockManger/SubProdStockIN';



const App = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (


        <Router>

            <Layout openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}>
                <Routes>
                    <Route path='/login' element={<Pages />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/frachise" element={<Franchise />} />
                    <Route path='/product' element={<Products />} />
                    <Route path='/subProduct' element={<SubProducts />} />
                    <Route path='/categories' element={<Categoriees />} />
                    <Route path="/viewSubProduct/:productId" element={<SubProductView />} />
                    <Route path='/subProdStock' element={<SubProdStockIN/>} />

                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
