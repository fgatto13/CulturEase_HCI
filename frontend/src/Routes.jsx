import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { 
    Homepage, 
    LoginPage,
    Bacheca,
    Catalogo 
} from "./Pages";

function Rts(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/bacheca" element={<Bacheca />}/>
                <Route path="/catalogo" element={<Catalogo />}/>
            </Routes>
        </Router>
    );
}

export default Rts;