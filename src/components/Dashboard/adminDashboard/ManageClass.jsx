import { useQuery } from "@tanstack/react-query";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";

 

const ManageClass = () => {
     
    const {data:panndingData=[],refetch } = useQuery({
        queryKey: ['pannding'],
        queryFn: async () => {
            const fetching = await fetch('http://localhost:5000/pannding')
            const result = fetching.json()
            return result
        }
})
    const approvedHandler = (id) => {
        fetch(`http://localhost:5000/pannding/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body : JSON.stringify({status:'approved'})
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
    }


     
    

    return (
        <div className="overflow-x-auto w-full my-11 ml-6 p-11">
            <table className="table w-full">
                <thead className='bg-emerald-400'>
                    <tr>
                        <th>number</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {panndingData.map((value, index) => {
                        return (
                            <tr key={value._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={value.classImage} alt="" />
                                    </div>
                                </td>
                                <td>{value.className}</td>
                                <td>${value.classPrice}</td>
                                <td className="flex gap-3">
                                    <button
                                        onClick={() => approvedHandler(value._id, value.name)}
                                        disabled={value?.status == 'approved' || value?.status == 'deny'  ? true : false}
                                        className="p-2 rounded-lg bg-yellow-300 btn">
                                       Approved
                                    </button>
                                    <button
                                        disabled={value?.role == 'instructor' ? true : false}
                                        className="p-2 btn rounded-lg bg-emerald-400">
                                       Deny
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;