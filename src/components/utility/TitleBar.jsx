 

const TitleBar = ({title}) => {
    return (
        <div className="text-center w-[98%] lg:w-[50%] mx-auto">
            <h1 className="text-4xl font-semibold text-emerald-600 title">{title}</h1>
            <p className="text-blue-950 font-semibold mb-3">Lorem ipsum dolor sit amet consectetur.</p>
            <hr className="border-1 border-purple-800" />
        </div>
    );
};

export default TitleBar;