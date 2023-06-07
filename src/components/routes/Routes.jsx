import { createBrowserRouter } from "react-router-dom";
import SignIn from "../form/SignIn";
import SignUp from "../form/SignUp";
 
import HomeComponents from "../home/HomeComponents";
import HomeLayout from "../layout/HomeLayout";
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element : <HomeComponents/>
           }
       ]
    },
    {
        path: '/signup',
        element : <SignUp/> 
    },
    {
        path: '/signin',
        element : <SignIn/> 
    },
    
     
])
export default router;