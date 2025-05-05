import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className='bg-[rgb(74_108_114/39%)] p-5 rounded h-80'>
        <div className='bg-white mb-3 py-2 px-4 flex justify-between rounded-lg '>
            <h2 className='w-1/5 p-1 text-slate-700 font-semibold'>Employee Name</h2>
            <h3  className='w-1/5 p-1 text-slate-700 font-semibold'>New Task</h3>
            <h4 className='w-1/5 p-1 text-slate-700 font-semibold'>Accepted Task</h4>
            <h4 className='w-1/5 p-1 text-slate-700 font-semibold'>Completed Task</h4>
            <h4 className='w-1/5 p-1 text-slate-700 font-semibold'>Failed Task</h4>
        </div>
        <div className='h-[80%] overflow-auto'>
        {
            userData.employees.map((elem, idx) => {
                
                return <div key={idx} className='border-2 border-cyan-500 mb-3 py-2 px-4 flex justify-between rounded-lg'>
                    <h2 className='w-1/5 text-white p-1'>{elem.name}</h2>
                    <h3  className='w-1/5 text-yellow-500 p-1'>{elem.taskCount.newTask}</h3>
                    <h4 className='w-1/5 text-blue-500 p-1'>{elem.taskCount.accepted}</h4>
                    <h4 className='w-1/5 text-green-500 p-1'>{elem.taskCount.completed}</h4>
                    <h4 className='w-1/5 text-rose-700 p-1'>{elem.taskCount.failed}</h4>
                </div>
            })
        }
        </div>

        
    </div>
  )
}

export default AllTask