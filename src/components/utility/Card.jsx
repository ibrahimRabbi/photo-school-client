import React from 'react';
import StarRating from './Rating';
import { Link } from 'react-router-dom';

const Card = ({ obj }) => {
    const { classImage, className, availableSeats,rating,benefit,_id } = obj
    let seats = false
    if (availableSeats < 1) {
        seats = true
    }
    return (
        <div className="card card-compact relative h-[480px] shadow-xl border">
            <figure><img loading='lazy' src={classImage} alt="Shoes" /></figure>
            {seats ? <div className="badge absolute top-2 right-2 bg-purple-600 text-white">not available</div> : '' }
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p className='text-xs'>If a dog chews shoes whose Lorem ipsum dolor sit amet, consectetur adipisicing elit tenetur.</p>
                <div className='mt-2'>
                    <p>Course Features</p>
                    <ul className='list-disc ml-4'>
                        {benefit?.map((v) => <li key={Math.random()}>{v}</li>)}
                    </ul>
                </div>
                
                <div className="flex justify-between">
                    <StarRating rating={rating} />
                    <Link to={`/course/${_id}` } disabled={seats} className={`p-3 btn rounded-lg bg-purple-700 hover:bg-purple-800 text-white`}>Enroll Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;