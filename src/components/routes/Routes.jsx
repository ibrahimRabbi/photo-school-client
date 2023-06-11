import { createBrowserRouter } from "react-router-dom";
import Classes from "../classes/Classes";
import Dashboard from "../Dashboard/Dashboard";
import AddClass from "../Dashboard/instructorDashboard/AddClass";
import MayClass from "../Dashboard/instructorDashboard/MayClass";
import UpdateClass from "../Dashboard/instructorDashboard/UpdateClass";
import Payment from "../Dashboard/payment/Payment";
import Enrolled from "../Dashboard/userDashboard/Enrolled";
import PayHistory from "../Dashboard/userDashboard/PayHistory";
 
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
                path: 'payment/:id',
                element : <Payment/>
            },
            {
                path: 'payhistory',
                element : <PayHistory/>
            },
            {
                path: 'enrolled',
                element : <Enrolled/>
            },
            /*instructor routes*/
            {
                path: 'addclass',
                element : <AddClass/>
            },
            {
                path: 'myclass',
                element : <MayClass/>
            },
            {
                path: 'updateClass/:id',
                element : <UpdateClass/>
            },
        ]
    }
    
     
])
export default router;