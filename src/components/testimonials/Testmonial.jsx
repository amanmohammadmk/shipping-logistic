import React from 'react'
import './testimonial.css';
import { FaStar } from "react-icons/fa";



function Testmonial() {
    return (
        <div className='testimonial'>
            <div className="testimonial-left">
                <div className="testimonial-left-content">
                    <h4>Testimonials</h4>
                    <h1>Our Clients Speak for Us</h1>
                </div>
                <div className="testimonial-left-image"></div>
                <div className="testimonial-left-sub">
                    <div className="star">
                   
                    <FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} />
                    </div>
                    <p>I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.</p>
                    <h4>James Haloth</h4>
                </div>
            </div>
            <div className="testimonial-right">
                <div className="testimonial-right-sub">
                    <div className="star"><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /></div>
                    <p>I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.</p>
                    <h4>James Haloth</h4>
                </div>
                <div className="testimonial-right-sub">
                    <div className="star"><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /></div>
                    <p>I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.</p>
                    <h4>James Haloth</h4>
                </div>
                <div className="testimonial-right-sub">
                    <div className="star"><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /><FaStar style={{color: "#74C0FC"}} /></div>
                    <p>I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.</p>
                    <h4>James Haloth</h4>
                </div>
            </div>
        </div>
    )
}

export default Testmonial