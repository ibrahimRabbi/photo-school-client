import { FaTrash } from 'react-icons/fa'
import { CiViewList } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedData from '../../Hooks/useSelecet';



const SelectedClass = () => {
    const { selectedData, refetch } = useSelectedData()

    
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

                <thead className='bg-purple-700'>
                    <tr className='text-slate-50'>
                        <th>number</th>
                        <th>image</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>unsaved</th>
                        <th>View details</th>

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
                                <td>
                                    <button onClick={() => deleteHandler(value._id)} className='text-red-600 text-2xl border p-2 rounded-lg'><RxCross2/></button>
                                </td>
                                <td>
                                    <Link to={`/course/${value.classId}`} className='p-2'>
                                        <CiViewList className='text-purple-800 text-3xl'/>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>

    );
};

export default SelectedClass;