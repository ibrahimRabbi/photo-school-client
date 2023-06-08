 
import useClassessHook from '../../Hooks/ClassessHook';
import TitleBar from '../../utility/TitleBar';
import InstructorCard from './InstructorCard';
 

const PopularInstructor = () => {
   
    const { classData } = useClassessHook()
    const maxEnrolledClass = classData.filter(v => v.totalEnrolled > 1700)
    return (
        <section className="mt-28 w-[90%] mx-auto">
            <TitleBar title='popular Instructors' />
            <div className='grid grid-cols-3 gap-10 mt-11'>
                {
                    maxEnrolledClass.map(v => <InstructorCard obj={v} key={v._id} />)
                }
            </div>
         </section>
    );
};

export default PopularInstructor;