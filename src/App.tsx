
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import './App.css';
import HalloweenPartyPage from "./Halloween/HalloweenPartyPage";
import NiamasBirthdayExpressPage from "./NiamaBirthday/NiamasBirthdayPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/halloween" element={<HalloweenPartyPage />} />
                    <Route path="/birthday-express" element={<NiamasBirthdayExpressPage />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
