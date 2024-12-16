import React, { useContext } from 'react';
import AuthContext from '../../context/authContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const { googleSignIn, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/';

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
              const user = (result.user)
                setUser(user)
                navigate(from)

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='my-2'>
            <div onClick={handleGoogleSingIn} className='flex justify-center'>
                <button className='btn btn-accent'>SignIn With Google</button>
            </div>
        </div>
    );
};

export default GoogleSignIn;