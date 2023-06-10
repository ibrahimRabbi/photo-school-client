//  import { useState } from 'react';
 
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { Context } from '../Authentication/AuthProvider';
import './class.css'

const ClassCard = ({ obj }) => {
    const { classImage, className, instructorName, classPrice, availableSeats } = obj
    const {user}=useContext(Context)

    const selectHandler = (data) => {
        const selectedData = {classId: data._id, userEmail : user.email, classImage,classPrice,className}
          
        fetch('http://localhost:5000/select', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(selectedData)
        })
        .then(res=>res.json())
            .then(res => {
                if (res.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${className} selected`,
                        showConfirmButton: false,
                        timer: 1500
                    })
            }
        })
    }
    return (
        <div className={`grid layout border p-5 rounded-lg ${availableSeats == 0 ? 'bg-red-400' : 'bg-base-200'}`}>
            <div className="avatar">
                <div className="w-32 rounded-xl">
                <img src={classImage} />
                </div>
            </div>
            <div className=" ">
                <h2 className="text-2xl font-semibold">{className}</h2>
                <div className=' text-gray-500'>
                    <p> class orgaized - {instructorName}</p>
                    <p> Available Seats - {availableSeats}</p>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <p> Course Fee -<span className='text-yellow-400 font-semibold text-xl'>${classPrice}</span></p>
                    <button onClick={()=>selectHandler(obj)} disabled={availableSeats == 0 ? true : false} className="btn bg-emerald-500">Select</button>
               </div> 
            </div>
         </div>
    );
};

export default ClassCard;