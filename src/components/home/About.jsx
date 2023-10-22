import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import TitleBar from '../utility/TitleBar';

const About = () => {
    return (
        <section id='about' className='w-[90%] my-20 pb-10 mx-auto'>
            <TitleBar title='About Us'/>
            <div className='flex gap-16 items-center   mt-12'>
                <div className='w-1/2'>
                    <img className='rounded-lg w-full ' src="https://i.ibb.co/SwqxFMm/employee.jpg" />
                </div>


                <div className='w-1/2'>
                    <p className='text-base font-semibold text-zinc-700 text-justify'><span className='text-purple-700 font-semibold text-xl'>EduCare</span> is Bangladeshs most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.

                        We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
                    <div className='mt-5'>
                        <Link className='flex gap-2 items-center font-bold text-purple-500'>READ MORE <BsArrowRight /></Link>
                    </div>
                </div>

               
            </div>

        </section>
    );
};

export default About;