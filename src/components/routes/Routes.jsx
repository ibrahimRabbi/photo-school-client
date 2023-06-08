import { createBrowserRouter } from "react-router-dom";
import Classes from "../classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import Payment from "../Dashboard/userDashboard/Payment";
import SelectClass from "../Dashboard/userDashboard/SelectClass";
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
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'selecetClass',
                element : <SelectClass/>
            },
            {
                path: 'payment',
                element : <Payment/>
            },
        ]
    }
    
     
])
export default router;