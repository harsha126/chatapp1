import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import '../Home.css'
import'../Login.css'
function Home() {
  return (
    <div className='home-container'>
        <div className='select'>
          <a>LogIN</a>
          <a>SignUp</a>
        </div>
        <Login/>
        <SignUp/>
    </div>
  )
}

export default Home