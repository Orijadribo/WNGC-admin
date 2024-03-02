import React, { useState } from 'react';
import TournamentDetails from '../modal windows/add tournament/TournamentDetails';

const Home = () => {
  const [addTournament, setAddTournament] = useState(false);

  const openModal = () => {
    setAddTournament(true);
  };

  const closeModal = () => {
    setAddTournament(false);
  };
  return (
    <div className='flex gap-5 items-center justify-center'>
      <div className='m-5 flex gap-5 items-center justify-center'>
        <div
          className='border p-2 rounded-lg cursor-pointer'
          onClick={openModal}
        >
          <p>Add Competition</p>
        </div>
        <div className='border p-2 rounded-lg'>
          <p>Add Players</p>
        </div>
        <div className='border p-2 rounded-lg'>
          <p>Create Draw</p>
        </div>
        <div className='border p-2 rounded-lg'>
          <p>Add Competition</p>
        </div>
        <div className='border p-2 rounded-lg'>
          <p>Add Competition</p>
        </div>
        <div className='border p-2 rounded-lg'>
          <p>Add Competition</p>
        </div>
      </div>
      {addTournament && <TournamentDetails closeModal={closeModal} />}
    </div>
  );
};

export default Home;
