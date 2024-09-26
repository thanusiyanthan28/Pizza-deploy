import React from 'react'
import "./About.css"
import AboutSlide from './AboutSlide'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='about-left-silde'><AboutSlide /></div>
            </div>
            <div className='about-right'>
                <h2>Pizza Da Valter About Us</h2>
                <p>At Pizza da Valter, we offer more than just pizza — we bring you an authentic taste of Italy.<br />
                    Each pizza is handcrafted with the finest ingredients, from our fresh-made dough to carefully<br />
                    chosen toppings, ensuring every bite is full of flavor. Founded by Valter, whose passion for <br />
                    Italian cuisine shines in every dish, we create unforgettable experiences with each pizza. <br />
                    Whether you dine in or take away, we're dedicated to serving you the best pizza in town, made <br />
                    with love and tradition.</p>

                <div className='about-see-more'>
                    <button>
                        See More <span >&gt;</span> {/* Right arrow (greater-than symbol) */}
                    </button>
                </div>
            </div>

        </div>
    )
}


export default About
