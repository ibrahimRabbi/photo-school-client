import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../Authentication/AuthProvider";

const useUserHook = () => {

    const {user} = useContext(Context)
   const {data:userData=[],refetch} = useQuery({
       queryKey: [user],
       queryFn: async () => {
           const fetching = await fetch(`http://localhost:5000/user?email=${user?.email}`)
           const result = fetching.json()
           return result
       }
    })
     
    return {userData,refetch}
};

export default useUserHook;