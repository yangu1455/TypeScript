import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import StudyRules from './pages/StudyRules';
import Members from './pages/Members';
import ToDo from './pages/ToDo';
import StopWatch from './pages/StopWatch';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/study-rules',
    element: <StudyRules />,
  },
  {
    path: '/members',
    element: <Members />,
  },
  {
    path: '/todo',
    element: <ToDo />,
  },
  {
    path: '/stop-watch',
    element: <StopWatch />,
  },
  {
    path: '/my-page',
    element: <MyPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

const App = () => {
  return (
    <div className='content'>
      <RouterProvider router={router}>
        <div>
          <Navbar />
          <Route path="/" element={<Home />} />
          <Route path="/study-rules" element={<StudyRules />} />
          <Route path="/members" element={<Members />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </div>
      </RouterProvider>
    </div>
  );
};

export default App;