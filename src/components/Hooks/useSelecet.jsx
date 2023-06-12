import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Authentication/AuthProvider";



const useSelectedData = () => {
    const { user } = useContext(Context)

    const { data: selectedData = [], refetch } = useQuery({
        queryKey: ['select'],
        queryFn: async () => {
            const fetching = await fetch(`https://photography-server-zeta.vercel.app/select?email=${user?.email}`)
            const final = await fetching.json()
            return final
        }
    })

    return { selectedData, refetch }
};

export default useSelectedData;