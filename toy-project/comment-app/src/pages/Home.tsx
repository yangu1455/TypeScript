import React from 'react'
import Comment from '../components/Comment';
import Navbar from '../components/Navbar';
import StudyRules from '../pages/StudyRules';
import Members from '../pages/Members';
import ToDo from '../pages/ToDo';
import StopWatch from '../pages/StopWatch';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Comment />
      </main>
    </div>
  )
}

export default Home