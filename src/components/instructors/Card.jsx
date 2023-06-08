 

const Card = ({ obj }) => {
    const { instructorImage, instructorEmail, instructorName } = obj
    return (
        <section className="flex justify-center items-center gap-5 bg-slate-100 border p-5 rounded-lg">
            <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={instructorImage} />
                </div>
            </div>

            <div>
                <p className="text-2xl font-semibold">{instructorName}</p>
                <p className="text-gray-500">{instructorEmail}</p>
                <p>weeding video and photoGraphy instructor</p>
            </div>
        </section>
    );
};

export default Card;