import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Simple from "./Pages/Simple.jsx";
import Array from './Pages/Array.jsx'
import Show from './Pages/Show.jsx';
import Counter from './Pages/Counter.jsx';
import DataBinding from './Pages/DataBinding.jsx';
import ChildComponent from './Pages/ChildComponent.jsx';
import Enable from './Pages/Enable.jsx';
import Sum from './Pages/Sum.jsx';
import Search from './Pages/Search.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/simple",
    element: <Simple/>,
  },
  {
    path: "/arr",
    element: <Array/>,
  },
  {
    path: "/show",
    element: <Show/>,
  },
  {
    path: "/counter",
    element: <Counter/>,
  },
  {
    path: "/databinding",
    element: <DataBinding/>,
  },
  {
    path: "/child",
    element: <ChildComponent/>,
  },
  {
    path: "/en",
    element: <Enable/>,
  },
  {
    path: "/sum",
    element: <Sum/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);