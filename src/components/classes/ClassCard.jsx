 import './class.css'

const ClassCard = ({ obj }) => {
    const { classImage, className, instructorName, classPrice, availableSeats } = obj
    return (
        <div className="grid layout border p-5 rounded-lg bg-base-200">
            <div className="avatar">
                <div className="w-32 rounded-xl">
                <img src={classImage} />
                </div>
            </div>
            <div className=" ">
                <h2 className="text-2xl font-semibold">{className}</h2>
                <div className=' text-gray-500'>
                    <p> class orgaized - {instructorName}</p>
                    <p> Available Seats - {availableSeats}</p>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <p> Course Fee -<span className='text-red-600 font-semibold text-xl'>${classPrice}</span></p>
                    <button className="btn bg-emerald-500">Listen</button>
               </div> 
            </div>
         </div>
    );
};

export default ClassCard;