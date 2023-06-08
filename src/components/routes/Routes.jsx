import { createBrowserRouter } from "react-router-dom";
import Classes from "../classes/Classes";
import SignIn from "../form/SignIn";
import SignUp from "../form/SignUp";
 
import HomeComponents from "../home/HomeComponents";
import Instructors from "../instructors/Instructors";
import HomeLayout from "../layout/HomeLayout";
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element : <HomeComponents/>
            },
            {
                path: 'instructors',
                element : <Instructors/>
            },
            {
                path: 'classes',
                element : <Classes/>
            },
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