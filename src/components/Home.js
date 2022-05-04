import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import '../Home.css'
import'../Login.css'
function Home() {
  const [isLoginPage,setIsLoginPage] = React.useState(false);
  return (
    <div className='home-container'>
        <div className='select'>
          <a onClick={()=>setIsLoginPage(true)}>LogIN</a>
          <a onClick={()=>setIsLoginPage(false)}>SignUp</a>
        </div>
        {
          isLoginPage ? <Login/>:<SignUp/>
        }
    </div>
  )
}

export default Home