import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import ActiveLink from "../utility/ActiveLink";
import { BiSelectMultiple, BiBookReader, BiUser } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { AiOutlineCrown, AiOutlineFolderAdd } from 'react-icons/ai'
import { FaHome, FaSignOutAlt, } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'
import { useContext } from "react";
import { Context } from "../Authentication/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import './dasboard.css'
import Loading from "../utility/Loading";
import Swal from "sweetalert2";





const Dashboard = () => {

    const { user, loading, logOut } = useContext(Context)
    const [userData, setUser] = useState([])
    const navigate = useNavigate()



    const signoutHandler = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                Swal.fire(
                    'sign out',
                    'You has been logout successfully',
                    'success'
                )
                navigate('/')
            }
        })

    }

    useEffect(() => {
        fetch(` http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setUser(res))
    }, [user])

    if (loading && !userData[0]?.role) {
        console.log('user')
        return <Loading />
    }





    return (
        <section className="">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>


                    <ul className="menu p-4 w-80 h-full bg-slate-100 text-zinc-950 text-base font-semibold">
                        <li className=" ">
                            <Link to='/' className='flex flex-col justify-start items-center'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-xl font-semibold">{user?.displayName}</h1>
                                    <p className="text-sm text-zinc-700">{userData[0]?.role ? userData[0]?.role : 'Student'}</p>
                                </div>
                            </Link>
                        </li>
                        {
                            (userData[0]?.role === 'admin') ? <>
                                <li className="effect mt-7"><ActiveLink to='manageClass'><MdClass />Manage Class</ActiveLink></li>
                                <li className=" effect"><ActiveLink to='manageUser'><BiUser /> Manage User</ActiveLink></li>

                            </> : (userData[0]?.role === 'instructor') ? <>
                                <li className="mt-7 effect"><ActiveLink to='addclass'><AiOutlineFolderAdd />Add Class</ActiveLink></li>
                                <li className="  effect"><ActiveLink to='myclass'><AiOutlineCrown />My Classes</ActiveLink></li>
                            </> : <>
                                <li className=" mt-7 effect"><ActiveLink to='selecetClass'> <BiSelectMultiple />Saved Classes</ActiveLink></li>
                                <li className="effect"><ActiveLink to='mycourse'><MdPayment />My Classes</ActiveLink></li>
                                <li className="effect"><ActiveLink to='payhistory'><MdPayment />Payment History</ActiveLink></li>
                            </>
                        }
                        <div className="divider mt-6"></div>
                        <li className="effect"><ActiveLink to='/'><FaHome />Home</ActiveLink></li>
                        <li className="effect"><ActiveLink to='/courses'><BiBookReader />Classes</ActiveLink></li>
                        <li className="effect bg-red-200 rounded-lg"><button onClick={signoutHandler}>Sign Out</button></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;



