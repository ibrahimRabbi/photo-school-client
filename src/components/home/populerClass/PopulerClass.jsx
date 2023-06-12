 import ClassCard from "../../classes/ClassCard";
import useClassessHook from "../../Hooks/ClassessHook";
 import TitleBar from "../../utility/TitleBar";

 

const PopulerClass = () => {
   
    const {classData} = useClassessHook()

    const maxEnrolledClass = classData.filter(v => v.totalEnrolled > 1700)
    
     
 
    return (
        <section className="mt-28 w-[90%] mx-auto">
            <TitleBar title='popular Classess'/>
            <div className="grid lg:grid-cols-2 gap-10 mt-11">
                {
                    maxEnrolledClass.map(v => <ClassCard obj={v} key={v._id} />)
                }
            </div>
        </section>
    );
};

export default PopulerClass;