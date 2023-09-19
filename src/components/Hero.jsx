import React from 'react'
import './hero.css'
// import './hero.js'
import imageOne from '../components/images/planet.svg'
import imageTwo from '../components/images/astronaut.svg'
import Navbar from './Navbar'
import Gallary from './Gallary'

const Hero = () => {
  return (
    <div>
        
      <div class="permission_denied">
          {/* <div id="tsparticles"></div> */}
          <Navbar/>
          <div class="denied__wrapper">
            
              {/* <h1>404</h1>
              <h3>LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page doesn't exist.</h3> */}
              <img id="astronaut" src={imageTwo} />
              <img id="planet" src={imageOne} />
              {/* <a href="#"><button class="denied__link">Go Home</button></a> */}
          </div>

        </div>
        <Gallary/>

        
    </div>
  )
}

export default Hero
