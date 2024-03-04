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
        <h2>Create Draw</h2>

        <button onClick={closeCreateDraw}>Close</button>
      </div>
    </div>
  );
};

export default CreateDraw;
