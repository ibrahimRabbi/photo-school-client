
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../Authentication/AuthProvider';
import './class.css'

const ClassCard = ({ obj }) => {
    const { classImage, className, instructorName, classPrice, availableSeats } = obj
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [userData, setUser] = useState({})

    useEffect(() => {
        fetch(` http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setUser(res))
    }, [user])

    const selectHandler = (data) => {



        if (user) {
            const selectedData = {
                classId: data._id,
                userEmail: user.email,
                classImage,
                classPrice,
                className
            }

            fetch(' http://localhost:5000/select', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(selectedData)
            })
                .then(res => res.json())
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
    return (
        <div className={`grid gap-8 lg:gap-1 layout border p-5 rounded-lg ${availableSeats == 0 ? 'bg-red-400' : 'bg-base-200'}`}>
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
                    <button onClick={() => selectHandler(obj)} disabled={availableSeats == 0 || userData.role == 'admin' || userData.role == 'instructor' ? true : false} className="btn bg-emerald-500">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;