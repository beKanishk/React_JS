import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() //this is a hook it will get us the value of userid from main.jsx
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User