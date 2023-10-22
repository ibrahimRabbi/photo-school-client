import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRating from '../utility/Rating';
import Swal from 'sweetalert2';
import { Context } from '../Authentication/AuthProvider';

const Review = () => {
    const data = useLoaderData()
    const { video, className, benefit, classPrice, classImage, rating, _id } = data
    const [save, setSave] = useState(false)
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const saveHandler = () => {
        if (user) {
            setSave(true)
            const savedData = {
                classId: _id,
                userEmail: user?.email,
                classImage,
                classPrice,
                className
            }

            fetch(' http://localhost:5000/select', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(savedData)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        toast('course has been saved')
                    }
                    if (res.message) {
                        toast(res.message)
                    }
                })
        } else {
            Swal.fire({
                title: 'you are not login',
                text: "sign in first then you can access class select option",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'sign In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } })
                }
            })
        }


    }

    useEffect(() => {
        fetch(`http://localhost:5000/select/${_id}`)
            .then(res => res.json())
        .then(res=>setSave(res))
    },[])

    return (
        <section className='mt-11 w-[90%] mx-auto flex justify-start gap-16'>
            <iframe width="560" height="315" src={video}></iframe>

            <div className='w-1/2'>
                <div>
                    <h1 className='text-purple-950 text-4xl font-semibold'>{className}</h1>
                    <p className='text-sm mt-2 font-semibold text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia quis enim suscipit assumenda asperiores voluptate, itaque harum, cupiditate, dicta hic? Blanditiis, hello is reprehenderit! Quaerat, architecto.</p>
                </div>

                <div className='mt-4 font-semibold'>
                    <h1 className='text-xl  text-purple-950'>Why enroll This course?</h1>
                    <ul className='list-disc ml-6 text-sm'>
                        <li>course duration 4 month</li>
                        <li>Life time support</li>
                        <li>job placemant opportunity</li>
                        <li>module based class will going</li>
                    </ul>
                </div>

                <div className='mt-8 flex justify-between items-center w-[90%]'>
                    <h1 className='text-2xl font-semibold text-purple-950'>Course Fee : {classPrice}-TK</h1>
                    <StarRating rating={rating} />
                </div>

                <div className='mt-16 w-[95%] flex justify-center gap-2 items-center'>
                    <Link to='/payment' state={{ obj: data }} className='bg-purple-700 text-white p-2 rounded-md text-center w-[60%]'>Check Out</Link>
                    <button onClick={saveHandler}>
                        {save ? <BsBookmarkFill className='text-3xl text-purple-700' /> :
                            <BsBookmark className='text-3xl text-purple-800' />
                        }


                    </button>
                </div>
            </div>
        </section>
    );
};

export default Review;