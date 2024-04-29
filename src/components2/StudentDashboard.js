import React from 'react'

const StudentDashboard = () => {
  return (
    <div>
      <div className=' w-5/6 ml-32 h-96 mb-10 rounded-lg bg-gray-100 '>
        <span className='font-semibold ml-5'>FYP Portal</span>
        <div className='submenue rounded-full ml-6  mt-2 border-blue-300 border-2 h-12 w-96'>
          <ul className='flex'>
            <li className='flex-1 ml-8 mt-2'>My Profile</li>
            <li className='flex-1 mt-2 cursor-pointer '>Create Project</li>
            <li className='flex-1 mt-2  '>My Project</li>
          </ul>
        </div>

        <div className='bg-purple-300 h-10 w-5/3  mt-3 rounded-lg'>
          <span className='ml-4'>Project Creation Form</span>

          <div className='table h-5/6 w-4/5'></div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
