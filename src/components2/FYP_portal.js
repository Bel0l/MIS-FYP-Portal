import React from 'react'
import '../index.css'
import StudentDashboard from './StudentDashboard'
import AdminDashboard from './AdminDashboard'

import Login from './Login'
const FYP_portal = () => {
  return (
    <div>
      <div className=' top-2 bottom-3   w-full h-16 bg-blue-800 text-white  mt-4 mb-4   '>
        Computer Science & IT (MIS)
      </div>
      <div className='  text-center w-full h-16 bg-gray-200 mt-1 mb-8 '>
        <span className='font-bold '>Department Name :</span>
        <span>Computer Science & IT</span>
      </div>
      {/* <StudentDashboard/>
      <AdminDashboard/> */}
      <Login/>
      {/* <StudentDashboard/> */} 
    </div>
  )
}

export default FYP_portal
