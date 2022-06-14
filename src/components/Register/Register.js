import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  return (
    <div className='container mt-5'>
        <form className='w-50 mx-auto'>
            <input type="text" className='form-control' id="" placeholder='Enter Your Name' />
            <input type="email" className='form-control mt-2' id="" placeholder='Enter Your Email' />
            <input type="password" className='form-control mt-2' id="" placeholder='Enter Your Password' />
            <input type="password" className='form-control mt-2' id="" placeholder='Re-type Your Password' />
            <input type="submit" className='btn btn-warning my-3' value="Register" />
        </form>

        <div>
            <p>Already have an account? <a href='/login'>Login</a></p>
            <br />
            <br />
            
            <button className='btn btn-warning mt-3'>Login With Google</button>
        </div>

    </div>
  )
}

export default Login;