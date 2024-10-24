import React, { useState, useEffect } from 'react';

const CallPlayback = () => {
  const [recordings, setRecordings] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch recordings from the API
  //   fetch('/api/recordings')  // Ensure this URL is correct
  //     .then((response) => {
  //       // Check if response is not OK (error)
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch recordings');
  //       }
  //       // Parse the response as JSON
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('Fetched recordings:', data);  // Log the data to check its structure
  //       setRecordings(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching recordings:', error);
  //       setError(error.message);
  //     });
  // }, []);

  const handlePlay = (audioUrl) => {
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(audioUrl);
    audio.play();
    setCurrentAudio(audio);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5 pt-20"> 
      {/* Added pt-20 (or more) to push the content below the navbar */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Call Playback</h2>

        {error ? (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        ) : (
          <table className="table-auto w-full border-collapse border rounded-lg">
            <thead>
              <tr className="bg-blue-200">
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Employee</th>
                <th className="border p-3 text-left">Duration</th>
                <th className="border p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {recordings.map((recording) => (
                <tr key={recording.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="border p-3">{recording.date}</td>
                  <td className="border p-3">{recording.employee}</td>
                  <td className="border p-3">{recording.duration}</td>
                  <td className="border p-3 text-center">
                    <button
                      onClick={() => handlePlay(recording.audioUrl)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Play
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CallPlayback;
