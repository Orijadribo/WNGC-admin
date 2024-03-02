import React, { useState } from 'react';
import TournamentDetails from '../modal windows/add tournament/TournamentDetails';
import AddPlayer from '../modal windows/add player/AddPlayer';
import CreateDraw from '../modal windows/create draw/CreateDraw';

const Home = () => {
  const [addTournament, setAddTournament] = useState(false);
  const [addPlayer, setAddPlayer] = useState(false);
  const [createDraw, setCreateDraw] = useState(false);

  const openTournamentModal = () => {
    setAddTournament(true);
  };

  const closeTournamentModal = () => {
    setAddTournament(false);
  };

  const openPlayersModal = () => {
    setAddPlayer(true);
  };

  const closePlayersModal = () => {
    setAddPlayer(false);
  };

  const openCreateDraw = () => {
    setCreateDraw(true);
  };

  const closeCreateDraw = () => {
    setCreateDraw(false);
  };
  return (
    <div className='flex gap-5 items-center justify-center'>
      <div className='m-5 flex gap-5 items-center justify-center'>
        <div
          className='border p-2 rounded-lg cursor-pointer'
          onClick={openTournamentModal}
        >
          <p>Add Competition</p>
        </div>
        <div
          className='border p-2 rounded-lg cursor-pointer'
          onClick={openPlayersModal}
        >
          <p>Add Players</p>
        </div>
        <div
          className='border p-2 rounded-lg cursor-pointer'
          onClick={openCreateDraw}
        >
          <p>Create Draw</p>
        </div>
      </div>
      {addTournament && (
        <TournamentDetails closeTournamentModal={closeTournamentModal} />
      )}
      {addPlayer && <AddPlayer closePlayersModal={closePlayersModal} />}
      {createDraw && <CreateDraw closeCreateDraw={closeCreateDraw} />}
    </div>
  );
};

export default Home;
