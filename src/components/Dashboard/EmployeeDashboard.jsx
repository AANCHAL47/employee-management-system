import React from 'react'
import Header from '../Other/Header'
import TaskCards from '../Other/TaskCards'
import TaskList from '../Task/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div>
        <Header changeUser={props.changeUser} data={props.employeeData} />
        <TaskCards data={props.employeeData} />
        <div className='p-7'>
          <TaskList data={props.employeeData} />
        </div>
        
    </div>
  )
}

export default EmployeeDashboard