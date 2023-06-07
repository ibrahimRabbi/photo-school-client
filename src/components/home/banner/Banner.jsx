import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div>
            

            <AwesomeSlider>
                <div className="bg-[url('https://i.ibb.co/qkCkRDW/nordwood-themes-F3-Dde-9thd8-unsplash.jpg')] bg-cover w-full h-full">
                    <div className='w-[40%]  mt-64 ml-28'>
                        <h1 className='text-emerald-500 font-semibold text-6xl'>learn something new with us</h1>
                        <p className='mt-2'>Photography is a powerful medium that allows us to freeze moments in time and capture the beauty of the world around us.</p>
                        <button className='btn bg-emerald-400 mt-3'>View Classes</button>
                     </div>
                </div>
                <div className="bg-[url('https://i.ibb.co/mzMmZGM/theregisti-HSXIp58y-Py-I-unsplash.jpg')] bg-cover w-full h-full">
                    <div className='w-[50%] text-center mt-72 mx-auto'>
                        <h1 className='text-cyan-300 font-semibold text-6xl'>prove on your selfe that you are geniuse</h1>
                        <p className='mt-2 text-slate-50'>Photography is a powerful medium that allows us to freeze moments in time and capture the beauty of the world around us.</p>
                        <button className='btn bg-emerald-400 mt-3'>view Features</button>
                    </div>
                </div>
                <div className="bg-[url('https://i.ibb.co/dr05kC1/robert-shunev-m-S1nl-Ybq1k-A-unsplash.jpg')] bg-cover w-full h-full">
                    <div className='w-[40%]  mt-24 mx-auto text-center'>
                        <h1 className='text-emerald-500 font-semibold text-6xl'>learn with us hobby</h1>
                        <p className='mt-2 text-slate-50'>  to freeze moments in time and capture the beauty of the world around us.</p>
                        <button className='btn bg-emerald-400 mt-3'>Enroll Now</button>
                    </div>
                </div>
                
            </AwesomeSlider>
       </div>
    );
};

export default Banner;