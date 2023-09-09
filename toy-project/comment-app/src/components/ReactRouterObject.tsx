import React from 'react'
import { createBrowserRouter, Router } from 'react-router-dom'
import { RouterItem } from '../types';
import Home from '../pages/Home';
import StudyRules from '../pages/StudyRules';
import Members from '../pages/Members';
import ToDo from '../pages/ToDo';
import StopWatch from '../pages/StopWatch';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const RouterInfo: RouterItem[] = [
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
];

const ReactRouterObject: Router = createBrowserRouter (
  RouterInfo.map(( routerInfo: RouterItem ) => {
    return 
  })
);

export default ReactRouterObject;