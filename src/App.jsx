// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CallLog from './components/CallLog';
import CallPlayback from './components/CallPlayback';
import Export from './components/Export';
import Navbar from './components/Navbar';
import './App.css';
//import AuthSystem from './components/AuthSystem';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        
        {/* Add margin-top to ensure content does not overlap with the Navbar */}
        <main className="flex-grow p-4 mt-16"> {/* mt-16 ensures the page starts below the navbar */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/call-log" element={<CallLog />} />
            <Route path="/call-playback" element={<CallPlayback />} />
            <Route path="/export" element={<Export />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
