 
import About from './About';
import StFeedback from './Feedback/StFeedback';
import Frequently from './Frequently';
import Banner from './banner/Banner';
import PopularInstructor from './popuInstructors/PopularInstructor';
import PopulerClass from './populerClass/PopulerClass';
 

const HomeComponents = () => {
    return (
        <section>
            <Banner />
            <Frequently/>
            <PopulerClass />
            <StFeedback/>
            <About/>
        </section>
    );
};

export default HomeComponents;