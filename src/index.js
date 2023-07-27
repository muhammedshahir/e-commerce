import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Contact from './Contact';
import Items from './Items';
import Animation from './Animation';
import Itemstwo from './Itemstwo';
import { StateProvider } from './Redux/StateProvider';
import  { initialState  } from './Redux/Reducer';
import reducer from './Redux/Reducer';
import Cart from './Cart';
import ImageLayout from './ImageLayout';
import Crocs from './Crocs';
import Croc from './Croc';
import Puma from './Puma';
import Nike from './Nike';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/items",
    element: <Items />
  },
  {
    path: "/anim",
    element: <Animation />
  },


  {
    path: "/itemstwo",
    element: <Itemstwo />
  },
  
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/imageLayout",
    element:<ImageLayout />
  },
  {
    path: "/Crocs",
    element:<Crocs />
  },
  {
    path: "/Croc",
    element:<Croc />
  },
  {
    path: "/Puma",
    element:<Puma />
  },
  {
    path: "/Nike",
    element:<Nike/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
