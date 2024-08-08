import Header from './Header';
import Body from './Body'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import ErrorPage from './Error';
import ResturentMenu from './ResturentMenu';


const App =()=>{
    return(
       <>
       <Header />
       <Outlet />
       </>
    )
}


const routes = createBrowserRouter([{
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />,
    children:[{
        path:'/',
        element:<Body />
    },
    {
        path:"about",
        element:<About />
    },
    {
        path:"contact",
        element:<Contact />
    },
    {
        path:"resturent/:resid",
        element:<ResturentMenu />
    }
]
}])

const AppLayout =()=>{
    return(
        <RouterProvider router={routes} ></RouterProvider>
    )
}

export default AppLayout;