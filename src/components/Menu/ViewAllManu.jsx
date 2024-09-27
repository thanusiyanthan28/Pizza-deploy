import React from 'react'
import "./ViewAllManu.css"
import our_manu_title from "../../assets/Images/Manu/Our_manu/our_manu_title.png"
import Appetizere from './ViewAllManu/Appetizere'
import Starters from './ViewAllManu/ColdStarters'
import HotStarters from './ViewAllManu/HotStarters'
import ColdStarters from './ViewAllManu/ColdStarters'
import Pasta from './ViewAllManu/Pasta'
import Risotto from './ViewAllManu/Risotto'
import MainCourses from './ViewAllManu/MainCourses'
import MainSalads from './ViewAllManu/MainSalads'
import Sides from './ViewAllManu/Sides'

const ViewAllManu = () => {
  return (
    <div className='view-all-manu'>
        <div className="view-all-manu-title">
            <img src={our_manu_title} alt="" />
        </div>
        <div className="appetizers">
            <div>
                <Appetizere />
            </div>
        </div>
        <div className="cold-starters">
          <div><ColdStarters /></div>
        </div>
        <div className="hot-starters">
          <HotStarters />
        </div>
        <div className="pizza-view-all">
          <Pasta />
        </div>
        <div className="Risotto">
          <Risotto />
        </div>
        <div className="main-courses">
          <MainCourses />
        </div>
        <div className="main-salads">
          <MainSalads />
        </div>
        <div className="sides">
          <Sides />
        </div>
    </div>
  )
}

export default ViewAllManu