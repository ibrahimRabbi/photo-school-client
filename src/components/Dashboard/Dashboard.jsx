import {  Outlet } from "react-router-dom";
import ActiveLink from "../utility/ActiveLink";
import { BiSelectMultiple, BiBookReader} from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { AiOutlineCrown, AiOutlineFolderAdd } from 'react-icons/ai'
import { FaHome, FaSignOutAlt } from 'react-icons/fa'

 

const Dashboard = () => {

    const role = true;
    return (
        <section className="">
            <div className="drawer lg:drawer-open">
                
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
               
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-emerald-400 text-lg font-semibold text-gray-600">
                      
                    {
                            role ? <>
                                <li><ActiveLink to='addclass'><AiOutlineFolderAdd />Add Class</ActiveLink></li>
                                <li><ActiveLink to='myclass'><AiOutlineCrown/>My Classes</ActiveLink></li>
                            </> : <>
                                    <li><ActiveLink to='selecetClass'> <BiSelectMultiple />selected Classes</ActiveLink></li>
                                    <li><ActiveLink to='enrolled'><MdPayment />Enrolled Classes</ActiveLink></li>
                                    <li><ActiveLink to='payhistory'><MdPayment />Payment History</ActiveLink></li>
                                </> 
                    }
                        <div className="divider"></div>
                        <li><ActiveLink to='/'><FaHome/>Home</ActiveLink></li>
                        <li><ActiveLink to='/classes'><BiBookReader/>Classes</ActiveLink></li>
                        <li><ActiveLink to='/classes'><FaSignOutAlt/>LogOut</ActiveLink></li>
                    </ul>

                </div>
            </div>
         </section>
    );
};

export default Dashboard;