import { useQuery } from "@tanstack/react-query";



const useClassessHook = () => {

  const { data: classData = [], refetch } = useQuery({
    queryKey: ['class'],
    queryFn: async () => {
      const fetching = await fetch(`https://photography-server-zeta.vercel.app/class`)
      const result = await fetching.json()
      return result
    },
  })

  return { classData, refetch }
};

export default useClassessHook;