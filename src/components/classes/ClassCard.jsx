
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




    }
    return (
        <div className={`grid gap-8 lg:gap-1 layout border p-5 rounded-lg shadow-md ${availableSeats == 0 ? 'bg-gray-500' : 'bg-base-200'}`}>
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
                    <button onClick={() => selectHandler(obj)} disabled={availableSeats == 0 || userData.role == 'admin' || userData.role == 'instructor' ? true : false} className="btn bg-gradient-to-r from-purple-700 to-pink-700 text-slate-50">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;