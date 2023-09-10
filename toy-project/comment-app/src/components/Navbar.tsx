import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav_nav'>
      <ul className='nav_ul'>
        <li className='nav_li'>
          <Link className="nav_a" to="/">Talking Potato 🥔</Link>
        </li>
        <li className='nav_li'>
          <Link className="nav_a" to="/study-rules">스터디 규칙 📝</Link>
        </li>
        <li className='nav_li'>
          <Link className="nav_a" to="/members">멤버 소개 🧍🏻‍♂️</Link>
        </li>
        <li className='nav_li'>
          <Link className="nav_a" to="/todo">To-do ☑️</Link>
        </li>
        <li className='nav_li'>
          <Link className="nav_a" to="/stop-watch">⏳</Link>
        </li>
      </ul>
      <ul className='nav_ul'>
        <li className='nav_li'>
          <Link className="nav_a" to="/my-page">유저 사진인지</Link>
        </li>
        <li className='nav_li'>
          <Link className="nav_a" to='/sign-up'>Sign Up ⭐️</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;