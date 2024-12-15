import React, { useContext, useState } from 'react';
import { AuthContext } from '../authentication_context/Authcontext';

const Sign_up = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { handleLogin } = useContext(AuthContext);

  // Handle change for email and password
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password
    if (email !== '' && password !== '') {
      setErrorMessage(''); // Clear error message
      handleLogin(email, password); // Call handleLogin from context
    } else {
      setErrorMessage('Invalid Email or Password');
    }
  };

  return (
    <div className='bg-[#1e2a47] p-12 w-[400px] mx-auto rounded-lg shadow-lg'>
      <h1 className='text-3xl text-center text-[#ffd700] font-semibold mb-6'>Login</h1>
      <form className='flex flex-col justify-start items-start' onSubmit={handleSubmit}>
        <label htmlFor="username" className='text-lg text-white mb-2'>Email:</label>
        <input 
          type="email" 
          id="username" 
          name="email" 
          value={email} 
          onChange={handleChange}
          required 
          className='p-3 mb-4 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ffd700]'
        />
      
        <label htmlFor="password" className='text-lg text-white mb-2'>Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={handleChange}
          required 
          className='p-3 mb-4 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ffd700]'
        />
    
        <button 
          type="submit" 
         
          className='bg-[#ffd700] text-[#1e2a47] p-3 rounded-md w-full hover:bg-[#e1c21b] transition duration-300'
        >
          {errorMessage && <div className="error-message text-red-500 text-sm">{errorMessage}</div>}
          Login In
        </button>
      </form>

      <div className='mt-4 text-center'>
        <a href="/forgot-password" className='text-[#ffd700] hover:underline'>Forgot Password?</a>
        <span className='text-white mx-2'>|</span>
        <a href="/sign-up" className='text-[#ffd700] hover:underline'>Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

export default Sign_up;
