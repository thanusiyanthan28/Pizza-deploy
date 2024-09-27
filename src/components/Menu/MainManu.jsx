import React from 'react'
import FoodGallery from './FoodGallay'
import PizzaGallery from './PizzaGallery'
import Download from '../Download/Download'
import Location from '../Location/Location'

const MainManu = () => {
  return (
    <div>
        <FoodGallery />
        {/* <PizzaGallery /> */}
        <Download />
        <Location/>
    </div>
  )
}

export default MainManu