 
const StudentCard = () => {
    return (
            <div className="card w-96 bg-base-100 shadow-xl mr-16">
                <figure><img src="https://i.ibb.co/qWWnMnM/pexels-andrea-piacquadio-3771839.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
       
    );
};

export default StudentCard;