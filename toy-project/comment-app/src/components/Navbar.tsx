import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/mypage">유저 사진인지 이름인지 뭔지 들어올 자리</Link>
        </li>
        <li>
          <Link to="/">Talking Potato</Link>
        </li>
        <li>
          <Link to="/study-rules">스터디 규칙</Link>
        </li>
        <li>
          <Link to="/members">멤버 소개</Link>
        </li>
        <li>
          <Link to="/todo">To-do</Link>
        </li>
        <li>
          <Link to="/stop-watch">⏳</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/SignUp'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;