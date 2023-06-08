import useClassessHook from "../Hooks/ClassessHook";
import Card from "./Card";

 

const Instructors = () => {
    const { classData } = useClassessHook()
    
    return (
        <div className="grid grid-cols-3 gap-10 mt-11 w-[90%] mx-auto">
            {
                classData.map(v=><Card obj={v} key={v._id}/>)
            }
        </div>
    );
};

export default Instructors;