import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import ActiveLink from '../utility/ActiveLink';
import Swal from 'sweetalert2'
import {BsSearch} from 'react-icons/bs'
import Loading from '../utility/Loading';
const Navbar = () => {
    const { user, logOut } = useContext(Context)
    const [users,setUsers] = useState([])
 
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

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
        .then(res=>setUsers(res))
    },[user])

    // if (!users[0]?.role) {
    //     return <div className='my-80'>
    //         <Loading/>
    //     </div>
    // }
     
    return (
        <nav className="w-full bg-slate-100">
            <div className="navbar flex justify-between items-center  w-[94%] mx-auto">

                <Link className='lg:flex hidden items-center'>
                    <p className='text-3xl font-semibold'><span className=' text-purple-800'>Edu</span><span>Care</span></p>
                </Link>

                
                    <form className='relative w-[40%]'>
                        <input className='p-3 rounded-3xl w-full border border-purple-700 ' type="text" name="" id="" placeholder='what would you like to Learn?' />
                        <button className='absolute right-0 bg-purple-700 text-slate-50 text-md py-4 font-bold px-4 rounded-r-full rounded-l-xl' type="submit"><BsSearch /></button>
                </form> 
                

                    
                    <div className='space-x-5 font-semibold'>
                    <ActiveLink to='courses'>All Courses</ActiveLink>
                    {user ? <div className='flex justify-center items-center gap-5'>
                        {
                            (users[0]?.role === 'admin') ? <Link to='/dashboard/manageClass'>Dashboard</Link>
                                : (users[0]?.role === 'instructor') ? <Link to='/dashboard/myclass'>Dashboard</Link> : <Link to='/dashboard/mycourse'>Dashboard</Link>
                        }
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <button className='border border-purple-700 p-2 rounded-md hover:bg-purple-600 hover:text-white font-semibold duration-150 text-zinc-600' onClick={logout}>Sign Out</button>
                    </div> : <Link to='/signin' className='border border-purple-700 p-2 rounded-md hover:bg-purple-600 hover:text-white font-semibold duration-150 text-zinc-600'>Sign In</Link>}
                   
                    
                    </div>
            </div>

        </nav>

    );
};

export default Navbar;
