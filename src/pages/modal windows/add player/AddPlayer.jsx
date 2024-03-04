import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import db from '../../../api/firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const AddPlayer = ({ closePlayersModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [handicapIndex, setHandicapIndex] = useState('');

  const playersCollectionRef = collection(db, 'players');

  const handlePlayerAdd = async () => {
    if (!firstName || !lastName || !gender || !handicapIndex) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await addDoc(playersCollectionRef, {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        handicapIndex: handicapIndex,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-10 w-[50%] rounded-lg flex flex-col gap-5'>
        <div
          className='flex justify-end cursor-pointer'
          onClick={closePlayersModal}
        >
          <div className=''>
            <IoClose />
          </div>
        </div>
        <h2 className='text-center'>Add Player</h2>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col gap-2 w-[50%]'>
            <label htmlFor='firstName' className=''>
              First Name:
            </label>
            <input
              className='border p-2 rounded-md'
              name='firstName'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2 w-[50%]'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              name='lastName'
              className='border  p-2 rounded-md'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <label htmlFor='gender'>Gender:</label>
          <div className='flex flex-row items-center justify-center gap-2 ml-5'>
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            <label className='' htmlFor='male'>
              Male
            </label>
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            <label className='' htmlFor='female'>
              Female
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='handicapIndex'>Handicap Index:</label>
          <input
            type='number'
            name='handicapIndex'
            className='border  p-2 rounded-md'
            placeholder='Handicap Index'
            value={handicapIndex}
            onChange={(e) => setHandicapIndex(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <button
            className='border rounded-md p-2 w-[50%]'
            onClick={handlePlayerAdd}
          >
            Add Player
          </button>
          <button
            className='border rounded-md p-2 w-[50%]'
            onClick={handlePlayerAdd}
          >
            Add Another Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
