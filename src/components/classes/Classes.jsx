import useClassessHook from "../Hooks/ClassessHook";
import TitleBar from "../utility/TitleBar";
import ClassCard from "./ClassCard";

 

const Classes = () => {
    const { classData } = useClassessHook()
    
    return (
        <section className="pt-12 w-[90%] mx-auto">
            <div className="mt-24">
                <TitleBar title='All coures and Classes' />
                <div className="grid grid-cols-2 gap-10 mt-11">
                    {
                        classData.map(v => <ClassCard obj={v} key={v._id} />)
                    }
                </div>
           </div>
        </section>
    );
};

export default Classes;