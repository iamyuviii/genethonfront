import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './Loader';  // Your loader component

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [recentCallLogs, setRecentCallLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setDashboardData({
        totalCalls: 1234,
        totalHours: 567,
      });

      setRecentCallLogs([
        { id: 1, type: 'Incoming', contact: 'John Doe', date: '2024-10-18', duration: '10m', time: '10:00 AM', showDetails: false },
        { id: 2, type: 'Outgoing', contact: 'Jane Smith', date: '2024-10-17', duration: '8m', time: '3:00 PM', showDetails: false },
        { id: 3, type: 'Incoming', contact: 'Mike Lee', date: '2024-10-16', duration: '15m', time: '1:00 PM', showDetails: false },
      ]);

      setLoading(false);

      setTimeout(() => setFadeIn(true), 100);
    }, 500);
  }, []);

  const toggleCallDetails = (callId) => {
    setRecentCallLogs(prevLogs =>
      prevLogs.map(log =>
        log.id === callId
          ? { ...log, showDetails: !log.showDetails }
          : { ...log, showDetails: false }
      )
    );
  };

  const copyToClipboard = (content, label) => {
    navigator.clipboard.writeText(content).then(() => {
      toast.success(`${label} copied to clipboard!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    }).catch(err => {
      toast.error(`Failed to copy ${label}.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    });
  };

  const callDataGraph = {
    labels: ['2024-10-12', '2024-10-13', '2024-10-14', '2024-10-15', '2024-10-16', '2024-10-17', '2024-10-18'],
    datasets: [
      {
        label: 'Calls Received',
        data: [5, 6, 4, 7, 5, 9, 8, 10, 12, 0],
        borderColor: '#2b6cb0',
        backgroundColor: '#90cdf4',
        tension: 0.2,
      },
      {
        label: 'Calls Dialed',
        data: [4, 5, 3, 6, 4, 8, 7, 9, 11, 0], // Random data
        borderColor: '#48bb78',
        backgroundColor: '#9ae6b4',
        tension: .2,
      },
    ],
  };

  if (loading) return <Loader />;

  return (
    <div className={`dashboard ${fadeIn ? 'fade-in' : ''}`}>
      <ToastContainer />

      <h2 className="heading">Dashboard</h2>

      <div className="main-content">
        {/* Left Column - Big Card with Stats */}
        <div className="big-card">
          <h3 className="big-card-title">Today's Call Statistics</h3>
          <div className="small-cards-container">
            <div className="small-card1">
              <h4>Calls Received Today</h4>
              <p>25</p>
            </div>
            <div className="small-card2">
              <h4>Calls Missed Today</h4>
              <p>3</p>
            </div>
            <div className="small-card3">
              <h4>Total Call Hours Today</h4>
              <p>5h 20m</p>
            </div>
            <div className="small-card4">
              <h4>Longest Call Duration</h4>
              <p>1h 15m</p>
            </div>
            <div className="small-card5">
              <h4>Average Call Duration</h4>
              <p>20m</p>
            </div>
          </div>
        </div>
        &nbsp;
        {/* Right Column - Graph */}
        <div className="graph-card">
          <h3 className="card-title">Calls Received and Dialed</h3>
          <div className="graph-container">
            <Line data={callDataGraph} />
          </div>
        </div>
      </div>
      &nbsp;
      {/* Recent Call Logs Section */}
      <div className="calls-by-type">
        <h3 className="calls-by-type-title text-lg font-bold mb-3">Recent Call Logs</h3>
        <ul className="calls-by-type-list divide-y divide-gray-200">
          {recentCallLogs.map((log) => (
            <li key={log.id} className="calls-by-type-item-container">
              <div
                className="calls-by-type-item p-4 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer transition-all duration-300"
                onClick={() => toggleCallDetails(log.id)}
              >
                <div className="flex justify-between">
                  <div className="font-medium text-gray-700">{log.contact} ({log.type})</div>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-sm text-gray-600">Duration: {log.duration}</span>
                  <span className="text-sm text-gray-600">Time: {log.time}</span>
                  <div className="text-sm text-gray-500">Date: {log.date}</div>
                </div>
              </div>
              {log.showDetails && (
                <div className={`call-details-card mt-4 p-4 bg-gray-50 rounded-lg shadow transition-all duration-300 ${log.showDetails ? 'open' : ''}`}>
                  <h4 className="font-semibold text-gray-800 mb-2">Call Details</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Sentiment:</strong> Positive
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-1">Summary</h5>
                      <p className="text-sm text-gray-600">Customer was inquiring about product details and requested a callback.</p>
                      <button
                        className="copy-button mt-2"
                        onClick={() => copyToClipboard("Customer was inquiring about product details and requested a callback.", 'Summary')}
                      >
                        Copy Summary
                      </button>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 mb-1">Transcript</h5>
                      <p className="text-sm text-gray-600">Hello, how can I assist you today?</p>
                      <button
                        className="copy-button mt-2"
                        onClick={() => copyToClipboard("Hello, how can I assist you today?", 'Transcript')}
                      >
                        Copy Transcript
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Dashboard;