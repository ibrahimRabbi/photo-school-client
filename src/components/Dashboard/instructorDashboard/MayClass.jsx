import { FaTrash, FaEdit } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi'
import Swal from 'sweetalert2';
import useMyClass from '../../Hooks/useMyClass';
import { Link } from 'react-router-dom';





const MayClass = () => {

    const { datas, refetch } = useMyClass()


    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "do you want to delete this?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://photography-server-zeta.vercel.app/pannding/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })


    }




    return (
        <div className="overflow-x-auto w-full my-11 ml-6 p-11">

            <table className="table w-full">

                <thead className='bg-emerald-400 text-[16px]'>
                    <tr>
                        <th>number</th>
                        <th>class Name</th>
                        <th>status</th>
                        <th> total Enrolled</th>
                        <th>Available Seats</th>
                        <th>FeedBack</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((value, index) => {
                        return (
                            <tr key={value._id}>

                                <th>{index + 1}</th>
                                <th>{value.className}</th>
                                <td>{value.status}</td>
                                <td><span className='ml-10'>{value.totalEnrolled}</span></td>
                                <td>{value.availableSeats}</td>
                                <th><BiMessageDetail className='text-2xl ml-6' /></th>
                                <th className='flex gap-3'>
                                    <button onClick={() => deleteHandler(value._id)} className='bg-red-600 p-2 rounded-lg text-slate-50 flex gap-2 items-center'><FaTrash /> Delete</button>
                                    <Link to={`/dashboard/updateClass/${value._id}`} className='bg-yellow-400 p-2 rounded-lg text-slate-50 flex gap-2 items-center '><FaEdit /> update</Link>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    );
};

export default MayClass;