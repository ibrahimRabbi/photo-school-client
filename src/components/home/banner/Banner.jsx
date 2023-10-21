import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Banner = () => {
    return (
        <header className='bg-slate-100'>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-[90%] pt-6 mx-auto flex justify-evenly   items-center'>
                        <div className='w-1/2'  >
                            <h1 className='text-4xl font-semibold text-purple-900'>convenient easy way of learning and gaining new skill</h1>
                            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit</p>
                            <div className='space-x-5 mt-4'>
                                <button className='bg-purple-700 py-2 px-11 font-semibold text-lg text-white rounded-md'>Enroll today</button>
                                <button className='bg-purple-700 py-2 px-11 font-semibold text-lg text-white rounded-md'>Join For free</button>
                            </div>
                        </div>
                        <img className='1/2' loading='lazy' src="https://i.ibb.co/72XCF6W/Smiling-Business-Man-Standing-PNG-Clipart.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%]  mx-auto flex justify-evenly  items-center'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl text-purple-900 text-start font-semibold'>Thousend of skills and degree we provide. also our have been a expert teacher</h1>
                            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit</p>
                            <div className='space-x-5 mt-4'>
                                <button className='bg-purple-700 py-2 px-11 font-semibold text-lg text-white rounded-md'>Enroll today</button>
                                <button className='bg-purple-700 py-2 px-11 font-semibold text-lg text-white rounded-md'>Join For free</button>
                            </div>
                        </div>
                        <img   width={350} loading='lazy' src="https://i.ibb.co/ctw1cWj/portrait-happy-woman-with-digital-tablet-1-removebg-preview.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[90%] mx-auto pt-11 flex justify-evenly items-center'>
                        <div className='w-1/2'>
                            <h1 className='text-4xl text-purple-900 text-start font-semibold tracking-normal leading-normal'>why getting late! lets start your new journey and career</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt impedit quidem eaque velit inventore nisi ea quibusdam, fugiat id distinctio. Voluptatem blanditiis cumque quasi eius dolor cum, libero impedit  </p>
                            <div className='space-x-5 mt-4'>
                                <button className='bg-purple-700 py-2 px-11 font-semibold text-lg text-white rounded-md'>Enroll today</button>
                                <button className='bg-purple-700 py-2 px-11 font-semibold text-lg text-white rounded-md'>Join For free</button>
                            </div>
                        </div>
                        <img   width={460} loading='lazy' src="https://i.ibb.co/25TJLnd/handsome-businessman-suit-glasses-cross-arms-chest-look-removebg-preview-1.png" />
                    </div>
                </SwiperSlide>


            </Swiper>

        </header>
    );
};

export default Banner;