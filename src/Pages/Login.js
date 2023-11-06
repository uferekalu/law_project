import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Components/Style.css';
import imges from '../Imges/dp.jpg'
import { Link } from 'react-router-dom';
import NavF from '../Components/NavF'
import Footer from '../Components/Footer'
const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submithandler = (e) => {
    e.preventDefault()

    let user = {

      email,
      password
    }
    localStorage.setItem('user', JSON.stringify(user))
    alert('done')
    navigate('/Home')
  }
  return (

    <>
  
  <NavF/>
      <div className='main'>
        <div className='sub-main'>
          <div>
            <div className='imgs'>

              <div className='container-img'>
                <img src={imges} alt='' className='profile' />

              </div>

            </div>
     
            <h1 className='text1' style={{ color: 'grey', textAlign: 'center' }}>Login</h1>
              <form onSubmit={submithandler}>

                <div>
                  <input style={{ margin: '30px' }} type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                  <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                </div>

                <div className='links'>
                  <Link to='/forgot-password'>Forgot Password</Link>
                  <span className='divider'>|</span>
                  <Link to='/register'>Registration</Link>
                </div>
              </form>


            </div>
          </div>
        </div>


        <Footer />

    </>
  )
}

export default Login;




