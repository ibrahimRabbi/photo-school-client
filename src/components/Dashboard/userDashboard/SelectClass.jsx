 

import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedData from '../../Hooks/useSelecet';
 


const SelectedClass = () => {
    const {userSelectedDatas,refetch} =useSelectedData()

    let total = 0
    for (let index = 0; index < userSelectedDatas.length; index++) {
        total = total + userSelectedDatas[0].classPrice
    }

    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/select/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }


    return (

        <div className="overflow-x-auto w-full my-11 ml-16 p-11">
            <div className='p-5 text-2xl flex justify-between items-center'>
                <h1>Total Amount : ${total}</h1>
                <Link to='/dashboard/payment' state={{ total }} className='btn border-0 bg-yellow-400 text-black text-center'>procced to pay</Link>
            </div>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>number</th>
                        <th>image</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userSelectedDatas.map((value, index) => {
                        return (
                            <tr key={value._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={value.classImage} alt="" />
                                    </div>
                                </td>
                                <td>{value.className}</td>
                                <th>${value.classPrice}</th>
                                <th>
                                    <button onClick={() => deleteHandler(value._id)} className='text-red-600 text-2xl'><FaTrash /></button>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>

    );
};

export default SelectedClass;