import useClassessHook from "../Hooks/ClassessHook";
import TitleBar from "../utility/TitleBar";
import Card from "./Card";

 

const Instructors = () => {
    const { classData } = useClassessHook()
    
    return (
        <section className="w-[90%] mx-auto pt-9">
            <div className="mt-28">
                <TitleBar title='Intructors' />
                <div className="grid grid-cols-3 gap-10 mt-11 ">
                    {
                        classData.map(v => <Card obj={v} key={v._id} />)
                    }
                </div>
           </div>
        </section>
    );
};

export default Instructors;