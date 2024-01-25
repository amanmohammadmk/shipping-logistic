import React from 'react'
import './hero.css';
import { Parallax } from 'react-parallax';

function Hero() {
    return (

        <div className="hero" >
            
            <div className="hero-top">
                <h4>we are best logistic company</h4>
                <h1>Streamline Your Shipping with Our Cargo Services</h1>
                <p>Simplify your shipping process and make it more efficient with our cargo services. From start to finish, we'll handle everything to ensure your cargo arrives safely.</p>
            </div>
            <div className="hero-bottom">
                <div className="hero-bottom-left">
                    <div className="client">
                        <div className="photo"> </div>
                        <div className='client-info'>
                            <h1>26K</h1>
                            <p>Satisfied Clients</p>
                        </div>

                        <div className='client-info-two' style={{ marginLeft: "2%" }}>
                            <h1>12+</h1>
                            <p>Years of Experience</p>
                        </div>
                    </div>

                </div>
                <div className="hero-bottom-right">

                    <div className="hero-bottom-right-top">
                        <div className="tracking">Tracking</div>
                        <div className="skip">Rate & Skip</div>
                    </div>
                    
                    <div className="hero-bottom-right-bottom">
                        <div className='input-box'>
                            <input type="text" placeholder="TRACKING ID" className="right-bottom-textbox" />
    
                            <div className="right-bottom-button">Track</div>
                        </div>

                        <p>See the tracking id on shipping document. <span style={{color:"blue"}}>Help</span></p>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default Hero