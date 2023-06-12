import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateClass = () => {
    const [image, setImage] = useState('')
    const param = useParams()
    const [data, setdata] = useState({})
    const url = `https://photography-server-zeta.vercel.app/class/${param.id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setdata(res))
    }, [url])




    const handleSubmit = (e) => {
        e.preventDefault()
        const className = e.target.name.value
        const classPrice = e.target.price.value
        const availableSeats = e.target.seat.value


        const fromData = new FormData()
        fromData.append('image', e.target.img.files[0])

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST_KEY}`, {
            method: "POST",
            body: fromData
        })
            .then(res => res.json())
            .then(res => {
                setImage(res.data.display_url)
            })


        fetch((`https://photography-server-zeta.vercel.app/update/${param.id}`), {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ className, classPrice, availableSeats, img: image })
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'update successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <section className="w-[70%] mx-auto">
            <form className="border p-16 flex flex-col gap-6" onSubmit={handleSubmit}>

                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input name="name" defaultValue={data?.className} className="border border-emerald-400 p-2" placeholder="class name" />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class price</span>
                        </label>
                        <input name="price" defaultValue={data?.classPrice} type='number' className="border border-emerald-400 p-2" placeholder="price" />

                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <input name="seat" type='number' defaultValue={data?.availableSeats} className="border border-emerald-400 p-2" placeholder="type number" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">uploade class Image</span>
                        </label>
                        <input name="img" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <input className="btn bg-emerald-400 " type="submit" />
            </form>
        </section>
    );
};

export default UpdateClass;