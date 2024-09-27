import React from 'react'
import "./ViewAllManu.css"
import our_manu_title from "../../assets/Images/Manu/Our_manu/our_manu_title.png"
import Appetizere from './ViewAllManu/Appetizere'

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
        <div className="cold-starters"></div>
        <div className="hot-starters"></div>
        <div className="pizza-view-all"></div>
        <div className="Risotto"></div>
        <div className="main-courses"></div>
        <div className="main-salads"></div>
        <div className="sides"></div>
    </div>
  )
}

export default ViewAllManu