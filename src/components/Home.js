import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import '../Home.css'
import'../Login.css'
import Navbar from './Navbar'
function Home() {
  const [isLoginPage,setIsLoginPage] = React.useState(true);
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="select">
          <a onClick={() => setIsLoginPage(true)}>LogIN</a>
          <a onClick={() => setIsLoginPage(false)}>SignUp</a>
        </div>
        {isLoginPage ? <Login /> : <SignUp />}
      </div>
    </div>
  );
}

export default Home