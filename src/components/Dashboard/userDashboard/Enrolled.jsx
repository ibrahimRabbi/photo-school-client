 

// const Enrolled = () => {
//     return (
//         <div className="overflow-x-auto w-full my-11 ml-6 p-11">
             
//             <table className="table w-full">

//                 <thead className='bg-emerald-400 text-lg'>
//                     <tr>
//                         <th>number</th>
//                         <th>image</th>
//                         <th>name</th>
//                         <th>Price</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userSelectedDatas.map((value, index) => {
//                         return (
//                             <tr key={value._id}>
//                                 <th>{index + 1}</th>
//                                 <td>
//                                     <div className="mask mask-squircle w-12 h-12">
//                                         <img src={value.classImage} alt="" />
//                                     </div>
//                                 </td>
//                                 <td>{value.className}</td>
//                                 <th>${value.classPrice}</th>
//                                 <th>
//                                     <button onClick={() => deleteHandler(value._id)} className='text-red-600 text-2xl'><FaTrash /></button>
//                                 </th>
//                             </tr>
//                         )
//                     })}
//                 </tbody>

//             </table>
//         </div>
//     );
// };

// export default Enrolled;