import { Link } from 'react-router-dom';
import ActiveLink from '../utility/ActiveLink';

const Navbar = () => {

    const user =  false
    

    return (
        <nav className='bg-emerald-400'>
            <div className="navbar w-[94%] mx-auto">   

                {/* navbar when screen in small then visible this div*/}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><ActiveLink to={'/'}>Item 1</ActiveLink></li>
                            <li><ActiveLink to={'/'}>2</ActiveLink></li>
                            <li><ActiveLink to={'/'}>Item 3</ActiveLink></li>
                            </ul>
                        </div>

                        <Link className='flex items-center'>
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
                        <li><ActiveLink to={'/'}>Home</ActiveLink></li>
                        <li><ActiveLink to={'/'}>Instructors</ActiveLink></li>
                        <li><ActiveLink to={'/'}>classes</ActiveLink></li>
                        {user ? <li><ActiveLink to={'/'}>Dashboard</ActiveLink></li>: ''}
                        </ul>
                </div>


                {/* navbar end section*/}
                <div className="navbar-end gap-2">
                    {
                        user ? <>
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src='hello world ' />
                                </div>
                            </label>
                            <button className='btn'>Sign Out</button>
                        </> : <Link to='/signup' className='btn'>Sign Up</Link>
                    }
                    </div>

         </div>
           
        </nav>

    );
};

export default Navbar;