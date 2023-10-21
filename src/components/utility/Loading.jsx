import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='text-center mt-20'>
            <ClipLoader color='#800080' size={70} />
        </div>
    );
};

export default Loading;