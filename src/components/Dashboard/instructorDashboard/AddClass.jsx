import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../../Authentication/AuthProvider";
import TitleBar from "../../utility/TitleBar";
import Loading from "../../utility/Loading";

const AddClass = () => {
    const { user } = useContext(Context)
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const navigate = useNavigate()
const [load,setLoad] = useState(false)

    const submit = (data) => {
        const { className, price, seat, img } = data
setLoad(true)
        const fromData = new FormData()
        fromData.append('image', img[0])


        fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
            method: "POST",
            body: fromData
        })
            .then(res => res.json())
            .then(res => {

                if (res.success) {
                    const obj = {
                        instructorName: user?.displayName,
                        instructorEmail: user?.email,
                        className,
                        classPrice : price,
                        availableSeats:seat,
                        totalEnrolled: 0,
                        classImage:res.data.display_url,
                        status: 'pannding',
                    }
                    fetch(' http://localhost:5000/pannding', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(obj)
                    })

                        .then(res => res.json())
                        .then(res => {
                            if (res.insertedId) {
                                setLoad(false)
                                navigate('/dashboard/myclass')
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'class has been added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }

    if (load) {
        return <Loading/>
    }
    return (
        <section className="w-[70%]  mt-11 rounded-lg shadow-lg mx-auto">
            <TitleBar title='Add Course'/>
            <form className=" px-16 py-6 flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">your Name</span>
                        </label>
                        <input defaultValue={user?.displayName} className="border border-purple-700 rounded-2xl p-2" placeholder="Name" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input defaultValue={user?.email} className="border border-purple-700 rounded-2xl p-2" placeholder="email" readOnly />
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input className="border border-purple-700 rounded-2xl p-2" placeholder="class name" {...register('className', { required: true })} />
                        {errors.className && <p className="text-red-500">className is required</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class price</span>
                        </label>
                        <input type='number' className="border border-purple-700 rounded-2xl p-2" placeholder="price" {...register('price', { required: true })} />
                        {errors.price && <p className="text-red-500">price is required</p>}
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <input type='number' className="border border-purple-700 rounded-2xl p-2" placeholder="type number" {...register('seat', { required: true })} />
                        {errors.seat && <p className="text-red-500">available seat is requird</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">uploade class Image</span>
                        </label>
                        <input type="file" className="file-input file-input-primary file-input-bordered w-full max-w-xs" {...register('img', { required: true })} />
                        {errors.img && <p className="text-red-500">Class Image is requird</p>}
                    </div>
                </div>

                <input className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-slate-50" type="submit" />
            </form>
        </section>
    );
};

export default AddClass;