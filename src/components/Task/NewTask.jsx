import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[325px] bg-blue-700 rounded-xl p-5'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-yellow-500 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <div className='mt-5 text-2xl font-semibold'>
          {data.taskTitle}
        </div>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 px-3 py-2 text-sm rounded'>Mark as Completed</button>
            <button className='bg-red-500 px-3 py-2 text-sm rounded'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default NewTask