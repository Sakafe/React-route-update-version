import {createBrowserRouter} from 'react-router-dom'
import MainLayout from './MainLayout';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products/Products';
import SingleProducts from '../Pages/SingleProducts/SingleProducts';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardLayout from './DashboardLayout';
import Profile from '../Pages/Profile/Profile';
import EditProfile from '../Pages/EditProfile/EditProfile';

const myCreatedRouter = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
   children:[
       {
        path: '/',
        element: <Home/>
       },
       {
        path: '/product',
        element: <Products/>,
        loader: () => fetch(`https://dummyjson.com/products`)
       },
       {
        path: '/products/:id',
        element: <SingleProducts/>,
        // loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
       },
       {
        path: '/contact',
        element: <Contact/>
       },
       {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
          {
            path:'/dashboard',
            element:<Dashboard/>
          },
          {
            path:'/dashboard/profile',
            element:<Profile/>
          },
          {
            path:'/dashboard/Editprofile',
            element:<EditProfile/>
          }
        ]
       },
  
   ]
  }
  ])

export default myCreatedRouter;