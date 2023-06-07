 
 
 const SignIn = () => {
    return (
        <form className='w-1/2 border-2 rounded-md mt-11 mx-auto p-10 space-y-4' >
            <h1 className="text-emerald-400 text-2xl font-semibold text-center">Sign In</h1>
            <hr  className="mt-4 border-2"/>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">email</span>
                </label>
                <input name="email" type="email" placeholder="Type here" className="input input-bordered w-full border-emerald-400  " />
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
            <input value='sign In' type="submit" className='bg-emerald-400 btn w-full mt-16' />
         </form>
    );
 };
 
 export default SignIn;