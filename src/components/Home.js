
import React from 'react'
import Education from './Education'
import Footer from './Footer'
import Navigation from './Navigation'
import Profile from './Profile'
import Work from './Work'

const Home = () => {
    
    return (
        <div>
            <div class="w3-content w3-margin-top" style={{maxWidth:'1400px'}}>
            <div class="w3-row-padding">
            <div class="w3-third">
                <Profile />
            </div>
            <div class="w3-twothird">
              <Work />
              <Education />
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
