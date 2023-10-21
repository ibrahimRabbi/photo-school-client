import usePayHistory from "../../Hooks/usePayHistory";
import { Link } from "react-router-dom";


const PayHistory = () => {
    const summeryData = usePayHistory()
    
    
    
    return (
         
        <div className="overflow-x-auto w-full my-11 ml-6 p-11">
             
            <table className="table w-full">

                <thead className='bg-purple-700 text-slate-50'>
                    <tr>
                        <th>transection ID</th>
                        <th>class Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {summeryData.map((value) => {
                        return (
                            <tr key={value._id}>
                                <td>{value.transictionId}</td>
                                <td>{value.className}</td>
                                <td>{value.date}</td>
                                <th>${value.classPrice}</th>
                                <th>
                                  <Link className="text-slate-50 p-2 rounded-md bg-purple-600">See details</Link>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    );
};

export default PayHistory;