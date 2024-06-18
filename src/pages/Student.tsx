import React from 'react'
import { Link } from 'react-router-dom'

const Student: React.FC = () => {
  return (
    
    <button title="student">
    <Link to="/student/create-student">create student</Link>
    </button>
  )
}

export default Student