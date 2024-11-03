import { createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import './App.css';
import Home from './pages/Home';
import Films from './pages/Films';
import About from './pages/About';
import NotFaund from './pages/NotFaund';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main />,
    errorElement: <NotFaund />,
    
    children:[
      {
        path:"/home",
        element:<Home />,
      },
      {
        path:"/films",
        element:<Films />,
      },
      {
        path:"/about",
        element:<About />
      },
    ],
  },
]);

export default router;