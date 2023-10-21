import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";



const ManageClass = () => {

    const { data: panndingData = [], refetch } = useQuery({
        queryKey: ['pannding'],
        queryFn: async () => {
            const fetching = await fetch(' http://localhost:5000/pannding')
            const result = fetching.json()
            return result
        }
    })



    const approvedHandler = (id, status) => {
        fetch(` http://localhost:5000/status/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(res => {
                
                if (res.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `class approved successfylly`,
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
                        <th>Image</th>
                        <th><span className="ml-11">Name</span></th>
                        <th>Price</th>
                        <th><span className="ml-20">Action</span></th>
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
                                <th>${value.classPrice}</th>
                                <td className="flex gap-3">
                                    <button
                                        onClick={() => approvedHandler(value._id, 'approved')}
                                        disabled={value?.status == 'approved' || value?.status == 'deny' ? true : false}
                                        className="rounded-lg bg-pink-600 hover:bg-pink-700 text-slate-50 btn">
                                        Approved
                                    </button>
                                    <button
                                        onClick={() => approvedHandler(value._id, 'deny')}
                                        disabled={value?.status == 'approved' || value?.status == 'deny' ? true : false}
                                        className="btn bg-purple-700 text-slate-50">
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