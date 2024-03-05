import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import db from '../../../api/firebaseConfig';
import { addDoc, collection, getDocs, doc, setDoc } from 'firebase/firestore';

const TournamentDetails = ({ closeTournamentModal }) => {
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentDate, setTournamentDate] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [tournamentDetails, setTournamentDetails] = useState('');
  const [draws, setDraws] = useState([]);

  const tournamentsCollectionRef = collection(db, 'tournaments');
  const drawsCollectionRef = collection(db, 'draw');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const saveTournament = async () => {
    // Check if all required fields are filled
    if (
      !tournamentName ||
      !tournamentDate ||
      !selectedValue ||
      !tournamentDetails
    ) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const tournamentRef = doc(tournamentsCollectionRef, tournamentName);
      await setDoc(tournamentRef, {
        date: tournamentDate,
        details: tournamentDetails,
        draw: selectedValue,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getDraws = async () => {
    try {
      const data = await getDocs(drawsCollectionRef);
      const drawData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDraws(drawData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDraws();
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-10 w-[50%] rounded-lg flex flex-col gap-5'>
        <div className='flex justify-end'>
          <div className='cursor-pointer' onClick={closeTournamentModal}>
            <IoClose />
          </div>
        </div>
        <h2 className='text-center'>Create Tournament</h2>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col gap-2 w-[100%]'>
            <label className=''>Tournament Name:</label>
            <input
              className='border p-2 rounded-md'
              type='text'
              placeholder='Enter tournament name'
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Date:</label>
            <input
              type='date'
              className='border  p-2 rounded-md'
              placeholder='Enter date (e.g., YYYY-MM-DD)'
              value={tournamentDate}
              onChange={(e) => setTournamentDate(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='dropdown'>Select a Draw:</label>
          <select
            id='dropdown'
            value={selectedValue}
            onChange={handleSelectChange}
            className='border p-2 rounded-md'
          >
            <option value=''>-- Choose an option --</option>
            {draws.map((draw) => (
              <option key={draw.id} value={draw.id}>
                {draw.id}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className='border p-2 rounded-md'
          placeholder='Tournament Details'
          value={tournamentDetails}
          onChange={(e) => setTournamentDetails(e.target.value)}
        />
        <button className='border rounded-md p-2' onClick={saveTournament}>
          Save Tournament
        </button>
      </div>
    </div>
  );
};

export default TournamentDetails;
