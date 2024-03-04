import React from 'react';import { IoClose } from 'react-icons/io5';


const AddPlayer = ({ closePlayersModal }) => {
const [firstName, setFirstName] = useState('')


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
            <label className=''>First Name:</label>
            <input
              className='border p-2 rounded-md'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div className='flex flex-col gap-2 w-[50%]'>
            <label>Last Name:</label>
            <input
              type='text'
              className='border  p-2 rounded-md'
              placeholder='Last Name'
              // value={tournamentDate}
              // onChange={(e) => setTournamentDate(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <label>Gender:</label>
          <div className='flex flex-row items-center justify-center gap-2 ml-5'>
            <input type='checkbox' id='male' name='male' value='Male' />
            <label className='' htmlFor='male'>
              Male
            </label>
            <input type='checkbox' id='female' name='female' value='Female' />
            <label className='' htmlFor='female'>
              Female
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Handicap Index:</label>
          <input
            type='number'
            className='border  p-2 rounded-md'
            placeholder='Handicap Index'
            // value={tournamentDate}
            // onChange={(e) => setTournamentDate(e.target.value)}
          />
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <button
            className='border rounded-md p-2 w-[50%]'
            onClick={closePlayersModal}
          >
            Add Player
          </button>
          <button className='border rounded-md p-2 w-[50%]' onClick={() => {}}>
            Add Another Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
