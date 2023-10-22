import React from 'react';

const FeedCard = ({data}) => {
    return (
        <div className="card card-compact w-64 mr-11 bg-gradient-to-t from-purple-300 to-purple-400 shadow-xl">
            <div className="avatar mt-4 mx-auto">
                <div className="w-24 rounded-full">
                    <img src={data.img} />
                </div>
            </div>
            <div className="card-body text-zinc-950">
                <h2 className="card-title mx-auto">{data.name}</h2>
                <p className=''>"If a dog chews shoes whose shoes does he choose Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur dolor molestias ratione, doloremque asperiores praesentium aperiam unde labore enim!</p>
                 
            </div>
        </div>
    );
};

export default FeedCard;