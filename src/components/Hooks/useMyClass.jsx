import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Authentication/AuthProvider";
 



const useMyClass = () => {
    const { user } = useContext(Context)
    const { data: datas = [], refetch } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const fetching = await fetch(`http://localhost:5000/class?email=${user?.email}`)
            const result = await fetching.json()
            return result
        }

    })
    return { datas, refetch }

};

export default useMyClass;