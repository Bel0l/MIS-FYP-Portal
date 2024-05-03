import React from 'react'
import { Link } from 'react-router-dom'
import './costum.css'

const ProjectsUnderMe = () => {
  return (
    <div >
         <div className=" w-5/6 ml-32 mt-8 h-96  mb-28 rounded-lg bg-gray-100 ">
        <span className="font-semibold ml-5 ">Supervisor Portal</span>
        <div className="submenue rounded-full w-3/4 ml-6  mt-2 border-blue-300 border-2 h-12 ">
          <ul className="flex">
            <li className="flex-1 ml-8 mt-2">My Profile</li>
            <li className="flex-1 mt-2 cursor-pointer ">Project Requests</li>
            <Link to='/Projects' className="flex-1 mt-2  cursor-pointer ">Projects Under Me</Link>
          </ul>
        </div>
<div className='bg-purple-500 mt-2 w-full h-10 '>
Digital transform : An integratedE-Departmental MIS Phase II
</div>
<div>
<Link to='/CreateTask' type="button" class="text-blue-900 ml-8  mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Create Task</Link>

<Link to='/Tasks' type="button" class="text-blue-900 ml-8  mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Tasks</Link>
<Link to='/Meetings' type="button" class="text-blue-900  mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Meetings</Link>
<button type="button" class="text-blue-900  mt-2 bg-purple-500 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-400 dark:hover:bg-purple-400 focus:outline-none dark:focus:ring-blue-800">Chat</button>
</div>
    

<div className='relative w-5/6 ml-9 h-auto mb-9 bg-gray-300'>
  <div className='absolute top-2 left-7 flex flex-wrap gap-4'>
    <div className='text-sm bg-gray-200 p-4 max-w-full'>
      Task #1
      <br/>
      Title: Requirements analysis
      <br/>
      Assigned to: Aqib
      <br/>
      Due date: 10/5/24
    </div>
    <div className='text-sm bg-gray-200 p-4 max-w-full'>
      Task #2
      <br/>
      Title: Another analysis
      <br/>
      Assigned to: John
      <br/>
      Due date: 12/5/24
    </div>
    <div className='text-sm bg-gray-200 p-4 max-w-full'>
      Task #3
      <br/>
      Title: Task Three
      <br/>
      Assigned to: Sarah
      <br/>
      Due date: 14/5/24
    </div>
    <div className='text-sm bg-gray-200 p-4 max-w-full'>
      Task #4
      <br/>
      Title: Fourth Task
      <br/>
      Assigned to: Michael
      <br/>
      Due date: 16/5/24
    </div>
  </div>
  <div className='absolute top-2 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-4'>
    <div className='text-sm bg-gray-200 p-4 max-w-full'>
      Task #2
      <br/>
      Title: Task Five
      <br/>
      Assigned to: Emily
      <br/>
      Due date: 18/5/24
    </div>
    <div className='text-sm bg-gray-200 p-4 max-w-full'>
      Task #3
      <br/>
      Title: Sixth Task
      <br/>
      Assigned to: Ryan
      <br/>
      Due date: 20/5/24
    </div>

   
  </div>
</div>





      </div>
    </div>
  )
}

export default ProjectsUnderMe
