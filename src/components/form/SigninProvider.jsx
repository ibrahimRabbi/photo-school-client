import { useContext } from 'react';

import { FaGoogle } from 'react-icons/fa'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';


const SigninProvider = ({ redirect }) => {

    const { signinGoogle } = useContext(Context)
    const navigate = useNavigate();

    const googleHandler = () => {
        signinGoogle()
            .then(res => {
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ email: res.user.email, name: res.user.displayName })
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(redirect)
                    })
            })
            .catch(err => console.log(err))
    }


    return (
        <button onClick={googleHandler} className="btn btn-outline border-purple-800 flex gap-1 items-center">
            <FaGoogle className='text-blue-400 text-xl' />
            Continue with Google
        </button>
    );
};

export default SigninProvider;



