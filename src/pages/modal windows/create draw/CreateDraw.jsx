import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import db from '../../../api/firebaseConfig';
import { getDocs, collection, addDoc, doc, setDoc } from 'firebase/firestore';

const CreateDraw = ({ closeCreateDraw }) => {
  const [playerDetails, setPlayerDetails] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [teeTime, setTeeTime] = useState('');
  const [draw, setDraw] = useState([]);
  const [drawName, setDrawName] = useState('');

  const playersCollectionRef = collection(db, 'players');

  const handleAddPlayer = () => {
    if (!playerName || !teeTime) {
      alert('Please fill in all fields');
      return;
    }

    // Add player and tee time to the draw array
    const newDraw = [...draw, { player: playerName, time: teeTime }];
    setDraw(newDraw);

    setPlayerName('');
    setTeeTime('');

    // console.log('Player added to draw:', { player: playerName, time: teeTime });
  };

  const handleCreateDraw = async () => {
    // Add the entire draw array to the 'draw' collection in Firestore
    try {
      const drawRef = doc(db, 'draw', drawName);
      await setDoc(drawRef, { draw: draw });
      console.log('Draw created successfully:', draw);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const data = await getDocs(playersCollectionRef);
        const playerData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPlayerDetails(playerData);
      } catch (err) {
        console.error(err);
      }
    };
    getPlayerDetails();
  }, [playersCollectionRef]);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 rounded-lg'>
        <div
          className='flex justify-end cursor-pointer'
          onClick={closeCreateDraw}
        >
          <div className=''>
            <IoClose />
          </div>
        </div>
        <h2 className='text-center'>Create Draw</h2>
        <div className='flex flex-col gap-5 py-5'>
          <div className='flex items-center gap-2'>
            <label htmlFor='drawName'>Draw Title:</label>
            <input
              type='text'
              name='drawName'
              id='drawName'
              required
              placeholder='Draw Title...'
              className='border p-2 rounded-md'
              value={drawName}
              onChange={(e) => setDrawName(e.target.value)}
            />
          </div>
          <div className='py-3'>
            <h3 className='text-center'>Players and Tee Times:</h3>
            {draw.map((item, index) => (
              <div key={index} className='flex justify-between p-2 border-b'>
                <span>{item.player}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <label htmlFor='player'>Select Player:</label>
              <input
                type='text'
                name='player'
                id='player'
                list='playerNames'
                required
                placeholder='Player Name...'
                className='border p-2 rounded-md'
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <datalist id='playerNames'>
                {playerDetails.map((player) => (
                  <option
                    key={player.id}
                    value={`${player.firstName} ${player.lastName} (${player.handicapIndex})`}
                  />
                ))}
              </datalist>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <label htmlFor='tee-time'>Tee Time:</label>
              <input
                type='time'
                id='tee-time'
                name='tee-time'
                min='06:00'
                max='18:00'
                className='border p-2 rounded-md'
                value={teeTime}
                onChange={(e) => setTeeTime(e.target.value)}
                required
              />
            </div>
            <button className='border p-2 rounded-md' onClick={handleAddPlayer}>
              Add Player
            </button>
          </div>
        </div>

        <button
          className='border rounded-md p-2 w-full'
          onClick={handleCreateDraw}
        >
          Create Draw
        </button>
      </div>
    </div>
  );
};

export default CreateDraw;
