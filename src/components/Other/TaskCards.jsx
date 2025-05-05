import React from 'react'

const TaskCards = ({data}) => {
  return (
    <div className='flex w-screen justify-between gap-6 mt-10 px-7'>
        <div className='w-[30%] bg-red-500 py-6 px-10 rounded-lg'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[30%] bg-blue-500 py-6 px-10 rounded-lg'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[30%] bg-green-500 py-6 px-10 rounded-lg'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.accepted}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[30%] bg-yellow-500 py-6 px-10 rounded-lg'>
            <h2 className='text-2xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskCards