import React from 'react'
import './about.css';

function About() {
  return (
    <div>
        <div className="first">
            <div className="first-left">
                <div className="aboutus">
                    About Us
                </div>
                <div className="head">
                    <h4>EMPOWERING YOUR BUSINESS WITH TAILORED LOGISTICS SOLUTION </h4>
                </div>
                <div className="content-about">
                    <p>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.</p>
                </div>
                <div className="learn">
                    <h4>Learn</h4>
                </div>
            </div>
            <div className="first-right">
                <div className="image">

                   
                <div className="image-logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBOnOV2htJyLqT6JuHGA8iWW3dZ15evS2h2sJ8g88pg&s" alt=""  width={50} height={50}/>
                </div>
                            <div className="image-content">
                            
                                <h1>647 +</h1>
                                <div className='award'>
                                    <h3>Awwards Winning</h3>
                                </div>
                            </div>
                      
                </div>
            </div>
        </div>
        <div className="second">
            <div className="second-sub">
                <div className="sub-left">
                    <h1>01 |</h1>
                </div>
                <div className="sub-right">
                    <h1>Expertise and Experience</h1>
                </div>
            </div>

            <div className="second-sub">
                <div className="sub-left">
                    <h1>02 |</h1>
                </div>
                <div className="sub-right">
                    <h1>Committed to Quality</h1>
                </div>
            </div>

            <div className="second-sub">
                <div className="sub-left">
                    <h1>03 |</h1>
                </div>
                <div className="sub-right">
                    <h1>Comprehensive Services</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About