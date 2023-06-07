import { createBrowserRouter } from "react-router-dom";
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
    
     
])
export default router;