import {  Outlet } from "react-router-dom";
import ActiveLink from "../utility/ActiveLink";
import { BiSelectMultiple } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'

 

const Dashboard = () => {
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
                    <ul className="menu p-4 w-80 h-full  text-base-content bg-emerald-400">
                      
                        <li><ActiveLink to='selecetClass'> <BiSelectMultiple/>selected Classes</ActiveLink></li>
                        <li><ActiveLink to='enrolled'><MdPayment/>Enrolled Classes</ActiveLink></li>
                        <li><ActiveLink to='payhistory'><MdPayment/>Payment History</ActiveLink></li>
                        <div className="divider"></div>
                        <li><ActiveLink to='/'><FaHome/>Home</ActiveLink></li>
                    </ul>

                </div>
            </div>
         </section>
    );
};

export default Dashboard;