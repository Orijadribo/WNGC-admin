import React from 'react';

const TournamentDetails = ({ closeTournamentModal }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-10 w-[50%] rounded-lg flex flex-col gap-5'>
        <div className='flex justify-end cursor-pointer' onClick={closeTournamentModal}>
          <div className='border'>
            <p>close</p>
          </div>
        </div>
        <h2 className='text-center'>Add Tournament</h2>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col gap-2 w-[100%]'>
            <label className=''>Tournament Name:</label>
            <input
              className='border p-2 rounded-md'
              type='text'
              placeholder='Enter tournament name'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Date:</label>
            <input
              type='date'
              className='border  p-2 rounded-md'
              placeholder='Enter date (e.g., YYYY-MM-DD)'
              // value={tournamentDate}
              // onChange={(e) => setTournamentDate(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Draw:</label>
          <button
            className='border rounded-md p-2'
            onClick={closeTournamentModal}
          >
            Create Draw
          </button>
        </div>
        <textarea
          className='border p-2 rounded-md'
          placeholder='Tournament Details'
          // value={tournamentName}
          // onChange={(e) => setTournamentName(e.target.value)}
        />
        <button
          className='border rounded-md p-2'
          onClick={closeTournamentModal}
        >
          Save Tournament
        </button>
      </div>
    </div>
  );
};

export default TournamentDetails;
