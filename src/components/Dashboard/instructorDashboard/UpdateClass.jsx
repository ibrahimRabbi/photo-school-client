import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../utility/Loading";



const UpdateClass = () => {
    const param = useParams()
    const [data, setdata] = useState({})
    const [image, setImage] = useState('')
    const [load, setLoad] = useState(false)
    const url = `http://localhost:5000/pannding/${param.id}`
    const navigate = useNavigate()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setdata(res)
                setImage(res.image)
            } )
    }, [url])

   


    const handleSubmit = (e) => {
        e.preventDefault()
        const className = e.target.name.value
        const classPrice = e.target.price.value
        const availableSeats = e.target.seat.value
setLoad(true)
 
       if(e.target.img?.files[0]){
           const fromData = new FormData()
           fromData.append('image', e.target.img.files[0])

           fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
               method: "POST",
               body: fromData
           })
               .then(res => res.json())
               .then(res => {
                   setImage(res.data?.display_url)
               })

       }

        fetch((url), {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ className, classPrice, availableSeats,image})
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    setLoad(false)
                    navigate('/dashboard/myclass')
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

    if (load) {
        return <Loading/>
    }

    return (
        <section className="w-[70%] mx-auto">
            <form className="border p-16 flex flex-col gap-6" onSubmit={handleSubmit}>

                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input name="name" defaultValue={data?.className} className="border border-purple-700 p-2 rounded-2xl" placeholder="class name" />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class price</span>
                        </label>
                        <input name="price" defaultValue={data?.classPrice} type='number' className="border border-purple-700 p-2 rounded-2xl" placeholder="price" />

                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <input name="seat" type='number' defaultValue={data?.availableSeats} className="border border-purple-700 rounded-2xl p-2" placeholder="type number" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">uploade class Image</span>
                        </label>
                        <input name="img" type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>
                </div>

                <input className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-slate-50" type="submit" />
            </form>
        </section>
    );
};

export default UpdateClass;