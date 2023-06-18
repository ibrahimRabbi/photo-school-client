import { useQuery } from "@tanstack/react-query";



const useAllUserHook = () => {

    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['/user'],
        queryFn: async () => {
            const fetching = await fetch(' http://localhost:5000/user')
            const result = fetching.json()
            return result
        }
    })

    return { allUser, refetch }
};

export default useAllUserHook;