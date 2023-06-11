import TitleBar from '../../utility/TitleBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './student.css'
import { EffectCoverflow, Pagination } from "swiper";
const Students = () => {  
    return (
        <section className=''>
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
                    <div className="card bg-slate-500 text-slate-50">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">marie</h2>
                            <p>I recently completed the Introduction to Photography course, and I wanted to provide feedback on my experience. Overall, I found the course to be informative and well-structured, providing a solid foundation for beginners in the field of photography.</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-slate-500 text-slate-50">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">natasha nice</h2>
                            <p>The course materials, including video lectures, readings, and supplementary resources, were well-curated and enriched my learning experience. I appreciated the variety of examples and case studies shared, which showcased the work of renowned photographers and provided inspiration for my own projects.</p>
                             
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-slate-500 text-slate-50">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Angela</h2>
                            <p>one area where the course could be enhanced is by incorporating more interactive elements. While the assignments were valuable, additional opportunities for live discussions or group activities would have enhanced the learning experience further</p>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-slate-500 text-slate-50 ">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">jackson</h2>
                            <p>The course platform was user-friendly and intuitive, making it easy to navigate through the modules and access the course materials. The quizzes and assessments throughout the course were helpful in evaluating my understanding and progress</p>
                             
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card   bg-slate-500 text-slate-50 ">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Jhon Due</h2>
                            <p>The course materials, including video lectures, readings, and supplementary resources, were well-curated and enriched my learning experience. I appreciated the variety of examples and case studies shared, which showcased the work of renowned photographers and provided inspiration for my own projects.</p>
                             
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
};

export default Students;
