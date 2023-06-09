import { useQuery } from "@tanstack/react-query";

const PayHistory = () => {
    const {data } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const fetching = await fetch(`http://localhost:5000/class`)
            const result = await fetching.json()
            return result
        },
    })
    return (
        <div className="overflow-x-auto w-full my-11 ml-6 p-11">
             
            <table className="table w-full">

                <thead className='bg-emerald-400 text-lg'>
                    <tr>
                        <th>Email</th>
                        <th>number of quantity</th>
                        <th>Date</th>
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
                                    <button className='text-red-600 text-2xl'>see Details</button>
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