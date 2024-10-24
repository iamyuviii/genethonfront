import React, { useState } from 'react';

const Export = () => {
  const [exportType, setExportType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Exporting:', { exportType, startDate, endDate });
    alert('Export functionality not implemented yet.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Export Data</h2>
        <div className="space-y-6">
          <select
            value={exportType}
            onChange={(e) => setExportType(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
          >
            <option value="" disabled>Select export type</option>
            <option value="callLogs">Call Logs</option>
            <option value="recordings">Recordings</option>
            <option value="statistics">Statistics</option>
          </select>
          
          <div className="flex space-x-4">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="block w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            />
          </div>

          <button
            onClick={handleExport}
            disabled={!exportType || !startDate || !endDate}
            className={`w-full py-3 font-semibold rounded-lg text-white ${
              !exportType || !startDate || !endDate
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 transition duration-300'
            }`}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
