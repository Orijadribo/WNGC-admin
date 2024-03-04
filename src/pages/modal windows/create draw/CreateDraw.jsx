import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import db from '../../../api/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';

const CreateDraw = ({ closeCreateDraw }) => {
  // const [playerDetails, setPlayerDetails] = useState([]);

  const playersCollectionRef = collection(db, 'players');

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const data = await getDocs(playersCollectionRef);
        const playerData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // setPlayerDetails(playerData);
        console.log(playerData);
      } catch (err) {
        console.error(err);
      }
    };
    getPlayerDetails();
  }, []);

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
        <div className='flex gap-5 py-5'>
          <div className='flex items-center justify-center gap-2'>
            <label htmlFor='player'>Select Player:</label>
            <input
              type='text'
              name='player'
              required
              placeholder='Player Name...'
              className='border p-2 rounded-md'
            />
          </div>
          <di className='flex items-center justify-center gap-2' v>
            <label htmlFor='meeting-time'>Tee Time:</label>
            <input
              type='time'
              id='meeting-time'
              name='meeting-time'
              min='09:00'
              max='18:00'
              className='border p-2 rounded-md'
              required
            />
          </di>
          <button className='border p-2 rounded-md' onClick={() => {}}>
            Add Player
          </button>
        </div>

        <button
          className='border rounded-md p-2 w-full'
          onClick={closeCreateDraw}
        >
          Create Draw
        </button>
      </div>
    </div>
  );
};

export default CreateDraw;
