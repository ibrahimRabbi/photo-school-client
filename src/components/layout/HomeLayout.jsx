 
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeLayout = () => {
    return (
        <div>
            <Navbar/> 
            <Outlet />
            <ToastContainer/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;