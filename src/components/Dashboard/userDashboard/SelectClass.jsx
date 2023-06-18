import { FaTrash } from 'react-icons/fa'
import { BiCreditCard } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedData from '../../Hooks/useSelecet';



const SelectedClass = () => {
    const { selectedData, refetch } = useSelectedData()

    // let total = 0
    // for (let index = 0; index < selectedData.length; index++) {
    //     total = total + selectedData[0].classPrice
    // }

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
                fetch(` http://localhost:5000/select/${id}`, {
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

        <div className="overflow-x-auto w-full my-11 ml-6 p-11">
            <div className='p-5 text-2xl flex justify-between items-center'>
                <h1>your selected Class : {selectedData.length}</h1>
            </div>
            <table className="table w-full">

                <thead className='bg-emerald-400 text-lg'>
                    <tr>
                        <th>number</th>
                        <th>image</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedData.map((value, index) => {
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
                                <th className='flex gap-4 items-center'>
                                    <button onClick={() => deleteHandler(value._id)} className='text-red-600 text-2xl border p-2 rounded-lg'><FaTrash /></button>
                                    <Link to={`/dashboard/payment/${value._id}`} className=' border p-2 rounded-lg' state={{ total: value.classPrice }}><BiCreditCard className='text-emerald-400 text-2xl' /></Link>
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