import { FaFacebookSquare,   FaInstagram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
 
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer flex items-center justify-between  px-36 py-10 bg-neutral text-neutral-content mt-20">
            <div>
                <img width={140} src="https://i.ibb.co/sbLXc68/Pngtree-camera-icon-4419861.png" alt="" />
                <p className='relative -top-9'>PhotoGraphy school Institution<br />Providing reliable tech since 2015</p>
            </div>
            <div className='text-2xl'>
                <span className="footer-title text-xl">Contract with us</span>
                <div className="grid grid-flow-col gap-4">
                     <Link><FaFacebookSquare className='text-blue-400'/></Link>
                    <p className='text-blue-500'><BsTwitter/></p>
                     <Link><FaInstagram className='text-pink-600'/></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;