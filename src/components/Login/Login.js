import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import useFirebase from '../../Hooks/FirebaseUse';


const Login = () => {
    const { signInWithGoogle} = useFirebase();
  return (
    <div className='container mt-5'>
        <form className='w-50 mx-auto'>
            <input type="email" className='form-control' id="" placeholder='Enter Your Email' />
            <input type="submit" className='btn btn-warning my-3' value="Login" />
        </form>

        <div>
            <p>New User? <a href='/register'>Register</a> </p>
            <br />
            <br />
            
            <button onClick={signInWithGoogle} className='btn btn-warning mt-3'>Login With Google</button>
        </div>

    </div>
  )
}

export default Login;