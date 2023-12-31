import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import useAllUserHook from "../../Hooks/useAllUserHook";



const ManageUser = () => {

    const { allUser, refetch } = useAllUserHook()



    const adminMakeHandler = (id, name, data) => {
        fetch(` http://localhost:5000/user/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ role: data })
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
                <thead className='bg-purple-700 text-slate-50'>
                    <tr>
                        <th>number</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th><span className="ml-24">Action</span></th>
                    </tr>
                </thead>
                <tbody>
                    {allUser.map((value, index) => {
                        return (
                            <tr key={value._id}>
                                <th>{index + 1}</th>
                                <td>{value.email}</td>
                                <td>{value.name}</td>
                                <th>{value?.role ? value.role : 'student'}</th>
                                <td className="flex gap-3">
                                    <button
                                        onClick={() => adminMakeHandler(value._id, value.name, 'admin')}
                                        disabled={value?.role == 'admin' ? true : false}
                                        className="text-xs btn bg-purple-800 text-slate-50">
                                        make admin
                                    </button>
                                    <button
                                        onClick={() => adminMakeHandler(value._id, value.name, 'instructor')}
                                        disabled={value?.role == 'instructor' ? true : false}
                                        className=" text-xs bg-pink-600 btn text-slate-50">
                                        make Instructor
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

export default ManageUser;