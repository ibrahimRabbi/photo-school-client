import TitleBar from '../../utility/TitleBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './student.css'
import { EffectCoverflow, Pagination } from "swiper";
const Students = () => {  
    return (
        <section className='mt-24'>
            <TitleBar title='Student Feedbacks'/>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card bg-gradient-to-r from-purple-400 to-pink-300 text-black">
                        <figure><img src="https://i.ibb.co/T2rYwSd/istockphoto-181062211-612x612.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title title">marie</h2>
                            <p>I recently completed the Introduction to Photography course, and I wanted to provide feedback on my experience. Overall, I found the course to be informative and well-structured</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-gradient-to-r from-purple-300 to-pink-200 text-black">
                        <figure><img src="https://i.ibb.co/3SCqVt7/pexels-andrea-piacquadio-3771839.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title title">natasha nice</h2>
                            <p>The course materials, including video lectures, readings, and supplementary resources, were well-curated and enriched my learning experience. I appreciated the variety </p>
                             
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-gradient-to-r from-purple-300 to-pink-200 text-black">
                        <figure><img className='h-[40vh]' src="https://i.ibb.co/hY265ty/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title title">Angela</h2>
                            <p>one area where the course could be enhanced is by incorporating more interactive elements. While the assignments were valuable, additional opportunities</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-gradient-to-r from-purple-300 to-pink-200 text-black">
                        <figure><img className='h-[40vh]' src="https://i.ibb.co/XWXhknb/aiony-haust-3-TLl-97-HNJo-unsplash.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title title">jackson</h2>
                            <p>The course platform was user-friendly and intuitive, making it easy to navigate through the modules and access the course materials. The quizzes and assessments throughout</p>
                             
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-gradient-to-r from-purple-300 to-pink-200 text-black">
                        <figure><img src="https://i.ibb.co/T2rYwSd/istockphoto-181062211-612x612.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title title">Jhon Due</h2>
                            <p>The course materials, including video lectures, readings, and supplementary resources, were well-curated and enriched my learning experience. I appreciated the variety of examples</p>
                             
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
};

export default Students;
