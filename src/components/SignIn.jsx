import React from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
            <p className='py-2'>
                Don't have an account yet? <Link to='/signup' className='underline'>Sign up</Link>.
            </p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input type="email" className='border p-3' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input type="password" className='border p-3' />
            </div>
            <button className="border border-yellow-300 bg-yellow-400 hover:bg-yellow-500 w-full p-4 my-2 text-white font-bold">
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default Signin