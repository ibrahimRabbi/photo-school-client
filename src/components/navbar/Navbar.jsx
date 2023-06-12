import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import ActiveLink from '../utility/ActiveLink';
import Swal from 'sweetalert2'
const Navbar = () => {

    
    const {user,logOut} = useContext(Context)
     
    const logout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "you want to sign out ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sign Out'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                Swal.fire(
                    'signout',
                    'success'
                )
            }
        })
    }
        
           
    return (
        <nav className='bg-emerald-400'>
            <div className="navbar w-[94%] mx-auto">   

                {/* navbar when screen in small then visible this div*/}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                            <li> <Link className='flex items-center'>
                                <img width={50} src="https://i.ibb.co/sbLXc68/Pngtree-camera-icon-4419861.png"></img>
                                <p className='flex flex-col font-semibold text-sm'>
                                    <span>PhotoGraphy</span>
                                    <span> School</span>
                                </p>
                            </Link></li>
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
                            <li><ActiveLink to='/classes'>classes</ActiveLink></li>
                            {user ? <>
                                <li><ActiveLink to='/dashboard'>Dashboard</ActiveLink></li>
                            </>
                                : ''}
                            </ul>
                        </div>

                        <Link className='lg:flex hidden items-center'>
                        <img width={70} src="https://i.ibb.co/sbLXc68/Pngtree-camera-icon-4419861.png"></img>
                        <p className='flex flex-col font-semibold text-xl'>
                            <span>PhotoGraphy</span>
                            <span> School</span>
                      </p>
                        </Link>
                    </div>


                {/* navbar when screen in large then visible this div*/}
                <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
                        <li><ActiveLink to='/classes'>classes</ActiveLink></li>
                        {user ? <>
                            <li><ActiveLink to='/dashboard'>Dashboard</ActiveLink></li>
                                </>
                              : ''}
                        </ul>
                </div>


                {/* navbar end section*/}
                <div className="navbar-end gap-2">
                    {
                        user ? <div className='flex items-center gap-2'>
                            <div className="tooltip tooltip-bottom z-20" data-tip={user.displayName}>
                                <label className="btn btn-ghost btn-circle avatar " >
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                            </div>
                            
                            <button onClick={logout} className='btn text-sm'>Sign Out</button>
                        </div> : <Link to='/signin' className='btn'>Sign In</Link>
                    }
                    </div>

         </div>
           
        </nav>

    );
};

export default Navbar;
