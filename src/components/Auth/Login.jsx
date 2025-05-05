import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (event) => {
        event.preventDefault();
        handleLogin(email, password);
        setEmail(''); 
        setPassword('');
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-cyan-500 p-20 rounded-2xl shadow'>
            <div>
            <h1 className='flex items-top justify-center'>Login</h1>
            </div>
            <form onSubmit={(event) => submitHandler(event)} className='flex flex-col items-center justify-center'>
                <input 
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    className='border-2 border-cyan-500 rounded-full py-3 px-5 text-l text-slate-200 bg-transparent placeholder:text-slate-200 my-3' 
                    type='email' 
                    placeholder='Enter Email' 
                    required 
                />
                <input 
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    className='border-2 border-cyan-500 rounded-full py-3 px-5 text-l text-slate-200 bg-transparent placeholder:text-slate-200 my-3' 
                    type='password' 
                    placeholder='Enter Password' 
                    required 
                />
                <button className='rounded-full py-3 px-5 text-l text-slate-200 bg-cyan-500 placeholder:text-slate-200 my-3'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login