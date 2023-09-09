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
      {/* <Route path="/" element={<Home />} />
      <Route path="/study-rules" element={<StudyRules />} />
      <Route path="/members" element={<Members />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="/stop-watch" element={<StopWatch />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} /> */}
      <Comment />
    </div>
  )
}

export default Home