import React from 'react';
import { logo } from '../../resources/images/images';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/admin');
  };
  return (
    <div className='flex items-center justify-center w-screen m-auto h-screen bg-[#F4F6F9]'>
      <div className='flex flex-col items-center justify-center rounded-lg w-[400px] bg-[#FFFFFF] p-14 shadow-xl'>
        <div className='flex flex-col items-center justify-center w-1/2'>
          <img className='w-32' src={logo} alt='WNGC Logo' />
          <h1 className='py-5 font-medium font-titleFont text-center text-xl'>
            WNGC Admin Login
          </h1>
        </div>

        <form className='flex flex-col w-full' action=''>
          <input
            className={`border rounded-lg p-2 mb-5 `}
            id='email'
            name='email'
            type='email'
            placeholder='Email Address'
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className='border rounded-lg p-2 mb-5'
            id='password'
            type='password'
            placeholder='Password'
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <div className='flex items-center justify-between w-full pb-5'>
          <a className='text-sm underline' href=''>
            Forgot your password?
          </a>
          <div className='flex items-center justify-center'>
            <input
              type='checkbox'
              id='remember'
              name='remember'
              value='Remember me'
            />
            <label className='pl-2 text-sm' htmlFor='remember'>
              Remember me?
            </label>
          </div>
        </div>

        <button
          className='w-full rounded-lg py-2 bg-[#02B056]'
          type='submit'
          id='loginButton'
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
