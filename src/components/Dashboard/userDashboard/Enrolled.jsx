import { useEffect, useContext,useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Context } from "../../Authentication/AuthProvider";

const Enrolled = () => {
    
    const [data, setData] = useState([])
    const { user } = useContext(Context)
    
    useEffect(() => {
        fetch(`http://localhost:5000/class?email=${user?.email}`)
        .then(res => res.json())
        .then(res=>setData(res))
    },[user])
     
    console.log(data)
      
    return (
        
        <div className="overflow-x-auto w-full my-11 ml-6 p-11">         
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
                    {data.map((value, index) => {
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
                                    <button  className='text-red-600 text-2xl'><FaTrash/></button>
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