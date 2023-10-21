 

const TitleBar = ({title}) => {
    return (
        <div className="text-center w-[98%] lg:w-[50%] mx-auto divider">
            <div>
                <p className="text-blue-950 font-semibold text-xs">Get your best choice here</p>
                <h1 className="text-2xl font-semibold text-purple-900 title">{title}</h1> 
            </div>
        </div>
    );
};

export default TitleBar;