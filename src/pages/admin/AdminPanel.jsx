import React, { useState } from 'react';
import Tournaments from './Tournaments';
import Draw from './Draw';
import Players from './Players';

const AdminPanel = () => {
  const [selectedScreen, setSetselectedScreen] = useState('home');

  const selection = () => {
    if (selectedScreen === 'home') {
      return <AdminPanel />;
    }
    if (selectedScreen === 'tournaments') {
      return <Tournaments />;
    }
    if (selectedScreen === 'draw') {
      return <Draw />;
    }
    if (selectedScreen === 'players') {
      return <Players />;
    }
  };

  console.log(selectedScreen);
  return (
    <div className='flex'>
      <div className='w-[600px] flex justify-center h-screen  rounded-xl bg-[#FFFFFF] shadow-xl'>
        <div className='mt-20 '>
          <p
            className='cursor-pointer'
            onClick={() => setSetselectedScreen('home')}
          >
            Home
          </p>
          <p
            className='cursor-pointer'
            onClick={() => setSetselectedScreen('tournaments')}
          >
            Tournaments
          </p>
          <p
            className='cursor-pointer'
            onClick={() => setSetselectedScreen('draw')}
          >
            Draw
          </p>
          <p
            className='cursor-pointer'
            onClick={() => setSetselectedScreen('players')}
          >
            Players
          </p>
        </div>
      </div>
      <div className='main'>
        {/* {selection()} */}
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          inventore illum nam incidunt, maxime saepe id. Eius, reiciendis
          veniam? Tenetur dolores aspernatur harum commodi, corrupti quibusdam,
          voluptatum reprehenderit asperiores veritatis sapiente unde quisquam
          fugit repellat dolore odit consectetur, repudiandae in! Dignissimos
          iure fugiat vitae obcaecati assumenda maxime nisi excepturi earum!
        </p> */}
      </div>
    </div>
  );
};

export default AdminPanel;
