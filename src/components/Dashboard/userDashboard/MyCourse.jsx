import React, { useContext, useEffect, useState } from 'react';
import TitleBar from '../../utility/TitleBar';
import { Link } from 'react-router-dom';
import { Context } from '../../Authentication/AuthProvider';


const MyCourse = () => {
    const { user } = useContext(Context)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/summery?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [user])

  
    return (
        <section className='w-[90%] mx-auto mt-12'>
            <TitleBar title='My classes' />
            <div className='grid grid-cols-3 gap-10 mt-10'>
                {data.map(v => {
                    return (
                        <Link className='border rounded-lg p-3 bg-slate-100' key={v._id}>
                            <img className='rounded-lg' src={v.classImage} alt="" />
                            <h1 className='text-xl mt-2 font-semibold text-purple-950'>{v.className}</h1>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default MyCourse;