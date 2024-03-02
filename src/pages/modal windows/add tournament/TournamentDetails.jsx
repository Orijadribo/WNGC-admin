import React from 'react';

const TournamentDetails = ({ closeModal }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 rounded-lg'>
        <h2>Add Tournament</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default TournamentDetails;
