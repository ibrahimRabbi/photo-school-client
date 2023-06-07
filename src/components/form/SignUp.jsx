 

const SignUp = () => {

    const handler = (e) => {
        e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
        const conPassword = e.target.password.value
        const obj = { name, email, password, conPassword }
        
    }
    return (
        <form onSubmit={handler} className='w-1/2 border-2 rounded-md mt-11 mx-auto p-10 space-y-4'>
            <h1 className="text-emerald-400 text-2xl font-semibold text-center">Sign Up</h1>
            <hr className="mt-4 border-2" />
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">What is your name?</span>  
                </label>
                <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full border-emerald-400  "   />    
            </div>

            <div className="form-control w-full  ">
                <label className="label">
                    <span className="label-text">your email</span>  
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered w-full  border-emerald-400 " />    
            </div>

            <div className="form-control w-full  ">
                <label className="label">
                    <span className="label-text">password</span>  
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered w-full border-emerald-400 " />    
            </div>

            <div className="form-control w-full  ">
                <label className="label">
                    <span className="label-text">confirm-password</span>  
                </label>
                <input type="password" placeholder="confirm-password" className="input input-bordered w-full border-emerald-400  " />    
            </div>

            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Pick your image</span>  
                </label>
                <input type="file" className="file-input file-input-bordered w-full  border-emerald-400" />    
            </div>

            <input type="submit" className='bg-emerald-400 btn w-full mt-7' />
        </form>
    );
};

export default SignUp;


















// import { useState } from "react";
// import { useForm } from "react-hook-form";

 
 
// const SignUp = () => {
//     const { register, handleSubmit, formState: { errors }, } = useForm()
//     const [data,setdata] = useState('')
     
//     return (
//         <form className="flex flex-col gap-4 mt-11 w-1/2 mx-auto" onSubmit={handleSubmit((data) => {
//             setdata(data)
//         })}>
//             <input className="border border-emerald-400 p-2" placeholder="Name" {...register('name', { required: true })} />
//             {errors.name && <p className="text-red-500">Last name is required.</p>}

//             <input className="border border-emerald-400 p-2" placeholder="email" {...register('email', { required: true })} />
//             {errors.email && <p className="text-red-500">email ius requird</p>}

//             <input className="border border-emerald-400 p-2" placeholder="password" {...register('password', { required: true })} />
//             {errors.password && <p className="text-red-500">password is requird</p>}

//             <input className="border border-emerald-400 p-2" placeholder="confirm-password" {...register('confirm', { required: true })} />
//             {errors.confirm && <p className="text-red-500">confirm password is required</p>}

//             <input  className="btn bg-emerald-400" type="submit" />
//         </form>
//     );
//  };
 
//  export default SignUp;