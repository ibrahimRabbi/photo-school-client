 
import { FaTrash } from "react-icons/fa";
import usePayHistory from "../../Hooks/usePayHistory";
 

const Enrolled = () => {

    const summryData = usePayHistory()

 
    return (

        <div className="overflow-x-auto w-full my-11 ml-6 p-11">
            <table className="table w-full">
                <thead className='bg-purple-700 text-slate-50'>
                    <tr >
                        <th>number</th>
                        <th>image</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {summryData.map((value, index) => {
                        return (
                            <tr key={value._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={value.image} alt="" />
                                    </div>
                                </td>
                                <td>{value.className}</td>
                                <th>${value.amount}</th>
                                <th>
                                    <button className='text-red-600 text-2xl'><FaTrash /></button>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Enrolled;