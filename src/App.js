import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About";
import ContactUs from "./Routes/ContactUs";
import WhatWeDo from "./Routes/WhatWeDo";
import Blog from "./Routes/Blog";
import Error from "./Routes/Error";
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import './Assets/Styles/common/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/"
                    element={
                        < Home />
                    }/>
                <Route path="/about"
                    element={
                        < About />
                    }/>
                <Route path="/whatWeDo"
                    element={
                        < WhatWeDo />
                    }/>
                <Route path="/contactus"
                    element={
                        < ContactUs />
                    }/>
                <Route path="/blog"
                    element={
                        < Blog />
                    }/>
                <Route component={Error}/>
            </Routes>
            <Footer/>
        </div>
    );
}
