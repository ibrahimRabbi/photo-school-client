import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Authentication/AuthProvider";
import Swal from 'sweetalert2'
import SigninProvider from "./SigninProvider";



const SignUp = () => {


    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { signUp, profile, } = useContext(Context)
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const submit = (data) => {
        const { name, email, password, image, confirm } = data
        if (password !== confirm) {
            setError('confirm password doesnt match')
        } else {
            const userObj = { email, password, name }

            signUp(email, password)
                .then(res => {
                    profile(res.user, name, image)
                    setError('')
                    fetch('http://localhost:5000/user', {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(userObj)
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.insertedId) {
                                Swal.fire({
                                    title: 'registation Successfull',
                                    text: 'now you can access any kind of information',
                                    icon: 'success',
                                    confirmButtonText: 'Okay'
                                })
                                navigate('/')
                            }
                        })

                })
                .catch(error => {
                    if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                        setError('this email already have an account')
                    }
                })
        }


    }






    return (
        <section className="py-11 mx-auto w-1/2">
            <div className="text-center">
                <h1 className="font-semibold text-4xl title">SignUp</h1>
                <hr className="mt-4 border-purple-700" />
            </div>
            <form className=" mt-8" onSubmit={handleSubmit(submit)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input className="border border-pink-600 rounded-2xl p-2" placeholder="Name" {...register('name', { required: true })} />
                    {errors.name && <p className="text-red-500">Last name is required.</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> your Email</span>
                    </label>
                    <input className="border border-pink-600 rounded-2xl p-2" placeholder="email" {...register('email', { required: true })} />
                    {errors.email && <p className="text-red-500">email ius requird</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' className="border border-pink-600 rounded-2xl p-2" placeholder="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/
                    })} />
                    {errors.password?.type === 'required' && <p className="text-red-500">password is requird</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">password minmum 6 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-500">password must have a uppercase lowercase and numbers characters</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type='password' className="border border-pink-600 rounded-2xl p-2" placeholder="confirm-password" {...register('confirm', { required: true })} />
                    {errors.confirm && <p className="text-red-500">confirm password is required</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">your photo</span>
                    </label>
                    <input className="border border-pink-600 rounded-2xl p-2" placeholder="photo URL" {...register('image', { required: true })} />
                    {errors.confirm && <p className="text-red-500">photo is required</p>}
                </div>
                <p className='text-red-600 font-semibold mb-2'>{error}</p>
                <input className="btn w-full mt-11 bg-gradient-to-r from-purple-700 to-pink-600 text-slate-50" type="submit" />
            </form>
            <p className="font-semibold mt-6 text-center">already have an account ? <Link to='/signin' className="text-purple-700 font-semibold">Sign In</Link></p>
            <div className="divider">OR</div>
            <div className="flex justify-center">
                <SigninProvider redirect='/' />
            </div>
        </section>
    );
};

export default SignUp;