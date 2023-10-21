import { useContext } from "react";
import { Context } from "../Authentication/AuthProvider";
import Loading from "../utility/Loading";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(Context)

    if (loading) {
        return <Loading />
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/signin'/>
    }



};

export default PrivetRoute;