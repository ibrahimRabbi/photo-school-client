import React from 'react';
import Marquee from "react-fast-marquee";
import FeedCard from './FeedCard';
import TitleBar from '../../utility/TitleBar';


const StFeedback = () => {

    const Feedback = [
        { name: 'noyon Majumdar', img: 'https://i.ibb.co/2gPc1QG/photo-modified.png' },
        { name: 'Boshir Ahamed', img: 'https://i.ibb.co/rbJjYs5/employee.jpg' },
        { name: 'noman obey', img: 'https://i.ibb.co/3SCqVt7/pexels-andrea-piacquadio-3771839.jpg' },
        { name: 'Sahariyar Shisir', img: 'https://i.ibb.co/hY265ty/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg' },
]

    return (
        <section className='mt-28 w-[90%] mx-auto'>
            <TitleBar title='Student Feedback'/>
            <Marquee className='mt-11'>
                
                    {Feedback.map(v => <FeedCard key={Math.random()} data={v} />)}
             
            </Marquee>
         </section>
    );
};

export default StFeedback;