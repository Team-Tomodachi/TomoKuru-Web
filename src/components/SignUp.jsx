import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password);
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }


  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Sign up</h1>
            <p className='py-2'>
                Already have an account? <Link to='/' className='underline'>Sign in</Link>.
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className='border p-3' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className='border p-3' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Confirm Password</label>
                <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" className='border p-3' />
            </div>
            <button className="border border-yellow-300 bg-yellow-400 hover:bg-yellow-500 w-full p-4 my-2 text-white font-bold">
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Signup;