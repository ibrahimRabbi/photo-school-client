import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Authentication/AuthProvider";

const PayHistory = () => {

    const { user } = useContext(Context)
    const [summeryData, setdata] = useState([])
    
    useEffect(() => {
      fetch(`http://localhost:5000/summery?email=${user?.email}`)
        .then(res=>res.json())
        .then(res=>setdata(res))
    },[user])
     
    console.log(summeryData)

     
    return (
         
        <div className="overflow-x-auto w-full my-11 ml-6 p-11">
             
            <table className="table w-full">

                <thead className='bg-emerald-400 text-lg'>
                    <tr>
                        <th>Email</th>
                        <th>quantity of EC</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {summeryData.map((value) => {
                        return (
                            <tr key={value._id}>
                                <th>{value.email}</th>
                                <td>{value.enrollClass}</td>
                                <td>{value.date}</td>
                                <th>${value.amount}</th>
                                <th>
                                  <Link className="font-serif btn bg-yellow-400 font-semibold">See details</Link>
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