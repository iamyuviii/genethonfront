import React, { useState, useEffect } from 'react';

const CallLog = () => {
  const [calls, setCalls] = useState([]);
  const [filteredCalls, setFilteredCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [dateFilter, setDateFilter] = useState('');
  const [employeeFilter, setEmployeeFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    // Fetch call logs from an API
    fetch('/api/call-logs') // Replace with your actual endpoint
      .then((response) => response.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error('Error fetching call logs:', error));
  }, []);

  useEffect(() => {
    setFilteredCalls(
      calls.filter((call) =>
        call.date.includes(dateFilter) &&
        call.employee.toLowerCase().includes(employeeFilter.toLowerCase()) &&
        call.type.toLowerCase().includes(typeFilter.toLowerCase())
      )
    );
  }, [calls, dateFilter, employeeFilter, typeFilter]);

  const handleCallClick = (callId) => {
    // Fetch the selected call's details (transcript, summary, sentiment)
    fetch(`/api/call-logs/${callId}`) // Replace with actual endpoint
      .then((response) => response.json())
      .then((data) => setSelectedCall(data))
      .catch((error) => console.error('Error fetching call details:', error));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Call Log</h2>

      {/* Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 shadow-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by employee"
          value={employeeFilter}
          onChange={(e) => setEmployeeFilter(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 shadow-md focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/4 shadow-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="incoming">Incoming</option>
          <option value="outgoing">Outgoing</option>
        </select>
      </div>

      {/* Call Logs Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-200 text-gray-700">
              <th className="border p-3">Date</th>
              <th className="border p-3">Employee</th>
              <th className="border p-3">Type</th>
              <th className="border p-3">Duration</th>
            </tr>
          </thead>
          <tbody>
            {filteredCalls.map((call) => (
              <tr
                key={call.id}
                onClick={() => handleCallClick(call.id)}
                className="cursor-pointer hover:bg-blue-100 transition-colors duration-300"
              >
                <td className="border p-3 text-center">{call.date}</td>
                <td className="border p-3 text-center">{call.employee}</td>
                <td className="border p-3 text-center">{call.type}</td>
                <td className="border p-3 text-center">{call.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call Details Section */}
      {selectedCall && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Call Details</h3>
          <p className="mb-3"><strong>Transcript:</strong> {selectedCall.transcript}</p>
          <p className="mb-3"><strong>Summary:</strong> {selectedCall.summary}</p>
          <p className="mb-3"><strong>Sentiment:</strong> {selectedCall.sentiment}</p>
        </div>
      )}
    </div>
  );
};

export default CallLog;
