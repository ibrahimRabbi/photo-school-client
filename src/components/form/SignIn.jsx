import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Context } from "../Authentication/AuthProvider";
import SigninProvider from "./SigninProvider";
import TitleBar from "../utility/TitleBar";


const SignIn = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { signIn } = useContext(Context)
    const location = useLocation()
    const redirectTo = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const loginHandler = (data) => {

        const { email, password, confirm } = data

        if (password !== confirm) {
            setError('confirm Password doesnt Match')
        } else {
            signIn(email, password)
                .then(() => {
                    setError('')
                    Swal.fire({
                        title: 'Log In Successfull',
                        text: 'keep Rock',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate(redirectTo)
                })
                .catch(error => {
                    if (error.message == "Firebase: Error (auth/user-not-found).") {
                        setError('user is not exist in this application plz provied a valid password and email')
                    } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                        setError('invalid password plz provide a valid password')
                    }
                })
        }

    }





    return (
        
            <div className="hero min-h-screen bg">
                <div className="hero-content gap-20">
                <img width={500} src="https://i.ibb.co/LCNFwB4/undraw-mobile-content-xvgr.png"/>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-6 ">
                    <form className="px-6" onSubmit={handleSubmit(loginHandler)}>
<TitleBar title='sign in'/>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input className="border border-purple-800 rounded-2xl p-2" placeholder="email" {...register('email', { required: true })} />
                                {errors.email && <p className="text-red-500">email ius requird</p>}
                            </div>

                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">password</span>
                                </label>
                                <input className="border border-purple-800 rounded-2xl p-2" placeholder="password" {...register('password', { required: true })} />
                                {errors.password && <p className="text-red-500">password is requird</p>}
                            </div>

                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">confirm-password</span>
                                </label>
                                <input className="border border-purple-800 rounded-2xl p-2" placeholder="confirm-password" {...register('confirm', { required: true })} />
                                {errors.confirm && <p className="text-red-500">confirm password is required</p>}
                            </div>
                            <p className='text-red-600 font-semibold'>{error}</p>
                            <input value='sign In' type="submit" className='bg-gradient-to-r from-purple-700 to-pink-600 text-slate-50 btn w-full mt-7' />
                        </form>
                        <p className="font-semibold text-center">dont have an account ? <Link to='/signup' className="text-purple-700 font-semibold">Register</Link></p>
                        <div className="divider">OR</div>
                        <div className="flex justify-center items-center">
                            <SigninProvider redirect={redirectTo} />
                        </div>
                    </div>
                </div>
            </div>

        
    );
};

export default SignIn;