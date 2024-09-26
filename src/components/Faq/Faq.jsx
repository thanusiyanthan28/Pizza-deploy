import React from 'react'
import FaqComponent from './FaqComponent'
import './Faq.css'
import faq_image from "../../assets/Images/Faq/faq.png"

const Faq = () => {
  return (
    <>
    <h2 className='faq-title'>FAQs</h2>
    <div className='faq'>

      <div className='faq-left'>
        <div className='sub-faq'> <FaqComponent /></div>
      </div>
      <div className='faq-right'>
        <img src={faq_image} alt="" />
      </div>
    </div>
    </>
  )
}

export default Faq
