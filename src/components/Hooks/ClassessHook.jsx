import { useQuery } from "@tanstack/react-query";

 

const useClassessHook = () => {

     const { data:classData=[]} = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
          const fetching = await fetch(`http://localhost:5000/class`)
            const result = await fetching.json()
            return result    
        },
    })
     
    return {classData}
};

export default useClassessHook;