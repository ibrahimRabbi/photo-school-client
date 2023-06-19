import { Outlet } from "react-router-dom";
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




const Dashboard = () => {

    const { user } = useContext(Context)
    const [userData, setUser] = useState({})

    useEffect(() => {
        fetch(` http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setUser(res))
    }, [user])



    return (
        <section className="">
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-200 text-lg text-gray-700 font-semibold">
                        {
                            (userData[0]?.role === 'admin') ? <>
                                <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='manageClass'><MdClass/> Manage Class</ActiveLink></li>
                                <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='manageUser'><BiUser /> Manage User</ActiveLink></li>

                            </> : (userData[0]?.role === 'instructor') ? <>
                                <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='addclass'><AiOutlineFolderAdd/>Add Class</ActiveLink></li>
                                    <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='myclass'><AiOutlineCrown/>My Classes</ActiveLink></li>
                            </> : <>
                                        <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='selecetClass'> <BiSelectMultiple/>selected Classes</ActiveLink></li>
                                        <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='enrolled'><MdPayment/>Enrolled Classes</ActiveLink></li>
                                        <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='payhistory'><MdPayment/>Payment History</ActiveLink></li>
                            </>
                        }
                        <div className="divider mt-6"></div>
                        <li className="bg-slate-50 shadow-md rounded-lg mt-4 effect"><ActiveLink to='/'><FaHome/>Home</ActiveLink></li>
                        <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='/classes'><BiBookReader />Classes</ActiveLink></li>
                        <li className="bg-slate-50 shadow-md rounded-lg mt-3 effect"><ActiveLink to='/classes'><FaSignOutAlt />LogOut</ActiveLink></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;



