import useClassessHook from "../Hooks/ClassessHook";
import Card from "../utility/Card";
import Loading from "../utility/Loading";
import TitleBar from "../utility/TitleBar";
 

 

const Classes = () => {
    const { classData } = useClassessHook()
     
    if (classData.length < 1) {
        return <Loading/>
    }
    return (
        <section className="" >
            
            <div className="py-12 w-[90%] mx-auto">
                <TitleBar title='All coures and Classes' />
                <div className="grid grid-cols-3 gap-10 mt-11">
                    {
                        classData.map(v => <Card key={v._id} obj={v} />)
                    }
                </div>
               </div>
           
        </section>
    );
};

export default Classes;