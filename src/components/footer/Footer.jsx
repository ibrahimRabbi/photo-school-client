import { FaFacebookSquare,   FaInstagram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
 
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer mt-32 p-10 bg-base-200 text-base-content">
            <aside>
                <Link className='lg:flex hidden items-center'>
                    <p className='text-3xl font-semibold'><span className=' text-purple-800'>Edu</span><span>Care</span></p>
                </Link>
                <p>EduCare Institution<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;