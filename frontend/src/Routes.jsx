import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages";

function Rts(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />}/>
            </Routes>
        </Router>
    );
}

export default Rts;