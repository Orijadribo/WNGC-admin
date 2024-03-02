import React from 'react';

const CreateDraw = ({ closeCreateDraw }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-5 rounded-lg'>
        <h2>Create Draw</h2>
        <button onClick={closeCreateDraw}>Close</button>
      </div>
    </div>
  );
};

export default CreateDraw;
