import { useQuery } from "@tanstack/react-query";



const useAllUserHook = () => {

    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['/user'],
        queryFn: async () => {
            const fetching = await fetch('https://photography-server-zeta.vercel.app/user')
            const result = fetching.json()
            return result
        }
    })

    return { allUser, refetch }
};

export default useAllUserHook;