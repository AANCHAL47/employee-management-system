import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[325px] bg-yellow-700 rounded-xl p-5'>
        <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <div className='mt-5 text-2xl font-semibold'>
          {data.taskTitle}
        </div>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>
        <div className='mt-4'>
          <button className='bg-red-500 px-3 py-2 text-sm rounded w-full'>Failed</button>
        </div>
    </div>
  )
}

export default FailedTask