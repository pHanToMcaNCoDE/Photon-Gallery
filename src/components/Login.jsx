import React from 'react'
import './login.css'
import imageOne from '../components/images/planet.svg'
import imageTwo from '../components/images/astronaut.svg'

const Login = () => {
  return (
    <div className='w-full flex justify-between items-center'>

      <div className='w-[50%] h-screen'>
         <div class="permission_denied">
          <div class="denied__wrapper">
              <img id="astronaut" src={imageTwo} />
              <img id="planet" src={imageOne} />
          </div>
        </div>
      </div>

      <div className='w-[50%] h-screen'>
        <form>
            <div className=''>
                <div>
                    <label>First Name:</label>
                    <input></input>
                </div>
                <div>
                    <label>First Name:</label>
                    <input></input>
                </div>
                <div>
                    <label>First Name:</label>
                    <input></input>
                </div>
                <div>
                    <label>First Name:</label>
                    <input></input>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
