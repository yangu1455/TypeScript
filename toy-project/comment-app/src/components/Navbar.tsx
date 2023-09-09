import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav_nav'>
      <ul className='nav_ul'>
        <li className='nav_li'>
          <Link to="/">Talking Potato 🥔</Link>
        </li>
        <li className='nav_li'>
          <Link to="/study-rules">스터디 규칙 📝</Link>
        </li>
        <li className='nav_li'>
          <Link to="/members">멤버 소개 🧍🏻‍♂️</Link>
        </li>
        <li className='nav_li'>
          <Link to="/todo">To-do ☑️</Link>
        </li>
        <li className='nav_li'>
          <Link to="/stop-watch">⏳</Link>
        </li>
      </ul>
      <ul className='nav_ul'>
        <li className='nav_li'>
          <Link to="/MyPage">유저 사진인지</Link>
        </li>
        <li className='nav_li'>
          <Link to='/SignUp'>Sign Up ⭐️</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;