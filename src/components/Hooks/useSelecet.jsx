import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Authentication/AuthProvider";

 

const useSelectedData = () => {
    const {user} = useContext(Context)
    const {data:userSelectedDatas=[],refetch} = useQuery({
        queryKey: ['select'],
        queryFn: async () => {
            const fetching = await fetch(`http://localhost:5000/select?${user?.email}`)
            const final = await fetching.json()
            return final
        }
    })

    return { userSelectedDatas,refetch}
};

export default useSelectedData;