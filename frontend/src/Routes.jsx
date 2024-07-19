import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage, LoginPage, BachecaPage, Catalogo, Cucina, Istruzione } from './Pages';

const Rts = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/bacheca" element={<BachecaPage />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/Cucina" element={<Cucina />} />
                <Route path="/Istruzione" element={<Istruzione />} />
            </Routes>
        </Router>
    );
};

export default Rts;