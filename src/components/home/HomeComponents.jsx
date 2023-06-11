 
import Banner from './banner/Banner';
import PopularInstructor from './popuInstructors/PopularInstructor';
import PopulerClass from './populerClass/PopulerClass';
import Students from './Students/Students';

const HomeComponents = () => {
    return (
        <section>
            <Banner />
            <PopulerClass />
            <PopularInstructor />
            <Students/>
        </section>
    );
};

export default HomeComponents;