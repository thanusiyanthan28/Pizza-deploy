import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Download from '../Download/Download'
import Faq from '../Faq/Faq'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import Manu from '../Menu/Manu'
import Service from '../Service/Service'

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Manu />
      <Service />
      <Download />
      <Location />
      <Faq/>
      <Footer />
    </div>
  )
}

export default HomePage
