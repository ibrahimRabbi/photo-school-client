import React from 'react';
import { BsFlag, BsCameraVideo } from 'react-icons/bs'
import { SiLoop } from 'react-icons/si'
import { FaUserGraduate } from 'react-icons/fa'
import TitleBar from '../utility/TitleBar';
const Frequently = () => {
    return (
        <section className='w-[90%] mx-auto mt-28'>
            <TitleBar title='Why Enroll'/>
            <div className='flex justify-center items-center gap-6 text-center mt-10'>
                <div className='border rounded-md p-4 bg-slate-50'>
                    <BsFlag className='block mx-auto text-4xl font-bold text-purple-800' />
                    <h1 className='text-xl font-semibold text-purple-800 mt-2'>Expert Teacher</h1>
                    <p className='text-sm font-semibold text-zinc-600'>during the course everyday would get realese module each module has a 10 videos Lorem ipsum dolor sit amet. </p>
                </div>

                <div className='border rounded-md p-4 bg-slate-50'>
                    <BsCameraVideo className='block mx-auto text-4xl font-bold text-purple-800' />
                    <h1 className='text-xl font-semibold text-purple-800 mt-1'>Module Based Class</h1>
                    <p className='text-sm font-semibold text-zinc-600'>our have a expart teacher. who take a class everyday Lorem ipsum dolor sit amet consectetur adipisicing elit the </p>
                </div>

                <div className='border rounded-md p-4 bg-slate-50'>
                    <SiLoop className='block mx-auto text-4xl font-bold text-purple-800' />
                    <h1 className='text-xl font-semibold text-purple-800 mt-1'>Life Time Support</h1>
                    <p className='text-sm font-semibold text-zinc-600'>we provide a life time supoort who take a class everyday Lorem ipsum dolor sit amet consectetur adipisicing elit the </p>
                </div>

                <div className='border rounded-md p-4 bg-slate-50'>
                    <FaUserGraduate className='block mx-auto text-4xl font-bold text-purple-800' />
                    <h1 className='text-xl font-semibold text-purple-800 mt-1'>certificate</h1>
                    <p className='text-sm font-semibold text-zinc-600'>after Finish the course then we provide a certificate.so that you would get to benifited who take a class everyday</p>
                </div>
             </div>
               
        </section>
    );
};

export default Frequently;