import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  
  return (
      <div id='task-list' className='h-[50%] w-full overflow-x-auto py-5 flex items-center justify-start gap-5 flex-nowrap'>
        
        {data.tasks.map((elem, idx) => {
          if(elem.accepted) {
            return <AcceptTask key={idx} data={elem} />
          }
          if(elem.completed) {
            return <CompleteTask key={idx} data={elem} />
          }
          if(elem.failed) {
            return <FailedTask key={idx} data={elem} />
          }
          if(elem.newTask) {
            return <NewTask key={idx} data={elem} />
          }
        })}
      </div>    
  )
}

export default TaskList