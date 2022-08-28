import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div className='text-center mt-5'>
        <h1>
          Welcome to Bugzilla
        </h1>
        <Link to='/projects'>View Projects</Link>
      </div>
    </>
  )
}

export default SignIn
