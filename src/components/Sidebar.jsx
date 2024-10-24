import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-5">Admin Panel</h1>
      <ul>
        <li className="mb-3">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        </li>
        <li className="mb-3">
          <Link to="/call-log" className="hover:text-gray-300">Call Log</Link>
        </li>
        <li className="mb-3">
          <Link to="/call-playback" className="hover:text-gray-300">Call Playback</Link>
        </li>
        <li className="mb-3">
          <Link to="/export" className="hover:text-gray-300">Export Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;