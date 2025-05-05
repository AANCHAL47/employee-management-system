import React from 'react'

const Header = (props) => {  

  const logOut = () => {
    localStorage.removeItem('loggedInUser');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between p-7 bg-[rgb(38_63_69/54%)]'>
        <h1 className='text-xl font-medium'>Hello, <br/> <span className='text-2xl font-semibold'>{props.data.name} &#128075;</span> </h1>
        <button onClick={logOut} className='bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-md font-medium'>Logout</button>
    </div>
  )
}

export default Header