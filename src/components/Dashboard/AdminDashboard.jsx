import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div>
        <Header changeUser={props.changeUser} data={props.adminData} />
        <CreateTask />
        <div className='p-5'>
            <AllTask />
        </div>
    </div>
    
  )
}

export default AdminDashboard