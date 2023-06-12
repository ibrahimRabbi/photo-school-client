 
import useClassessHook from '../../Hooks/ClassessHook';
import Card from '../../instructors/Card';
import TitleBar from '../../utility/TitleBar';
 
 

const PopularInstructor = () => {
   
    const { classData } = useClassessHook()
    const maxEnrolledClass = classData.filter(v => v.totalEnrolled > 1700)
    return (
        <section className="mt-28 w-[90%] mx-auto">
            <TitleBar title='popular Instructors' />
            <div className='grid lg:grid-cols-3 gap-10 mt-11'>
                {
                    maxEnrolledClass.map(v => <Card obj={v} key={v._id} />)
                }
            </div>
         </section>
    );
};

export default PopularInstructor;