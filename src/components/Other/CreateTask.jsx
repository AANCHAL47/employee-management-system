import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskAssignedTo, setTaskAssignedTo] = useState('');
    const [category, setTaskCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const [newTask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({taskTitle, taskDate, taskAssignedTo, category, taskDescription, accepted:false, newTask:true, completed:false, failed: false});

        const data = userData;

        data.employees.forEach((elem) => {
            
            if(taskAssignedTo == elem.name) {
                elem.tasks.push(newTask);
                elem.taskCount.newTask = elem.taskCount.newTask + 1;
            }
        })

        setUserData(data);
        
        setTaskTitle("");
        setTaskDate("");
        setTaskAssignedTo("");
        setTaskCategory("");
        setTaskDescription ("");
    }

  return (
    <div className='p-5'>
        <div>
            <form onSubmit={
                (e) => {
                    submitHandler(e)
                }
            } className='flex flex-wrap items-start justify-between w-full bg-[rgb(74_108_114/39%)] p-5 mt-5 rounded'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm mb-1'>Task Title</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-500 mb-4'
                            type='text' 
                            placeholder='Enter Task Title'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm mb-1'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-500 mb-4'
                            type='date' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm mb-1'>Assign To</h3>
                        <input 
                            value={taskAssignedTo}
                            onChange={(e) => {
                                setTaskAssignedTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-500 mb-4'
                            type='text' 
                            placeholder='Employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm mb-1'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e) => {
                                setTaskCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-500 mb-4'
                            type='text' 
                            placeholder='Design, Dev, QA etc.'
                        />
                    </div>
                </div>
                <div className='w-2/5 flex-col items-start'>
                    <h3 className='text-sm mb-1'>Task Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-500 mb-4'
                        rows='10'>
                    </textarea>
                    <button className='bg-cyan-500 hover:bg-cyan-600 px-4 py-3 rounded-md text-sm mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateTask