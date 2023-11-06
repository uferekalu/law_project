import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Components/Style.css';
import imges from '../Imges/dp.jpg'
import NavF from '../Components/NavF'
import Footer from '../Components/Footer'
const RegistrationForm = () => {
  const navigate = useNavigate()
  const [fname, setName] = useState('')
  const [lname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submithandler = (e) => {
    e.preventDefault()

    let user = {
      fname,
      lname,
      email,
      password
    }
    localStorage.setItem('user', JSON.stringify(user))
    alert('done')
    navigate('/')
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
      
              <h1 className='text1' style={{color:'grey'}}>Register Here</h1>
              <form onSubmit={submithandler}>
                <div >
                  <input type="text" placeholder='First Name' value={fname} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                  <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setLastName(e.target.value)} required />
                </div>

                <div>
                  <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                  <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div>
                  <input type="text" placeholder='Reset Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>


        <Footer />

    </>
  )
}

export default RegistrationForm;




