import React, { useState } from 'react';
import Tournaments from './Tournaments';
import Draw from './Draw';
import Players from './Players';
import Home from './Home';

const AdminPanel = () => {
  const [selectedScreen, setSelectedScreen] = useState('home');

  console.log(selectedScreen);

  return (
    <div className='flex flex-col'>
      <div className='border py-3 px-10'>
        <h1>Admin Dashboard</h1>
      </div>
      <div className='flex'>
        <div className='w-[25%] flex justify-center h-[100vh] rounded-xl bg-[#FFFFFF] shadow-xl'>
          <div className='mt-20 '>
            <p
              className='cursor-pointer'
              onClick={() => setSelectedScreen('home')}
            >
              Home
            </p>
            <p
              className='cursor-pointer'
              onClick={() => setSelectedScreen('tournaments')}
            >
              Tournaments
            </p>
            <p
              className='cursor-pointer'
              onClick={() => setSelectedScreen('draw')}
            >
              Draw
            </p>
            <p
              className='cursor-pointer'
              onClick={() => setSelectedScreen('players')}
            >
              Players
            </p>
          </div>
        </div>
        <div className='w-[75%]'>
          {selectedScreen === 'home' && <Home />}
          {selectedScreen === 'tournaments' && <Tournaments />}
          {selectedScreen === 'draw' && <Draw />}
          {selectedScreen === 'players' && <Players />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
