import { useEffect,useState,useContext } from "react";
 import { Context } from "../Authentication/AuthProvider";

const usePayHistory = () => {

    const { user } = useContext(Context)
    const [summeryData, setdata] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/summery?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setdata(res))
    }, [user])


    
    return summeryData
     
};

export default usePayHistory;