 

const TitleBar = ({title}) => {
    return (
        <div className="text-center w-[98%] lg:w-[50%] mx-auto">
            <h1 className="text-4xl font-semibold text-emerald-600">{title}</h1>
            <p className="text-gray-500 mb-3">Lorem ipsum dolor sit amet consectetur.</p>
            <hr className="border-1 border-emerald-400" />
        </div>
    );
};

export default TitleBar;