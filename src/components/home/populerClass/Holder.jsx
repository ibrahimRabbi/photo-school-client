import React, { useEffect, useState } from 'react';
import Card from '../../utility/Card';
import Loading from '../../utility/Loading';

const Holder = ({ categroy }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/class?category=${categroy}`)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    if (data.length === 0) {
        return <Loading />
    }
    return (
        <div className='w-[90%] mt-4 grid grid-cols-3 gap-10'>
            {
                data.map(v => <Card key={v._id} obj={v} />)
            }
        </div>
    );
};

export default Holder;