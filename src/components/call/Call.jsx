import React from 'react'
import './call.css';


function Call() {
  return (
    <div className='call'>
        <div className="call-left">
            <div className="call-left-content">
                <h4>Contact Us</h4>
                <h1>Take the First Step to Streamlined Shipping</h1>
            </div>


            <div className='call-left-sub-main'>
                <div className="call-left-sub">
                    <div className="call-left-sub-logo"></div>
                    <div className="call-left-sub-content">
                        <h2>Call</h2>
                        <h4>+12 5689 6548</h4>
                    </div>
                   
                </div>
                --------------------------------------
                <div className="call-left-sub">
                    <div className="call-left-sub-logo"></div>
                    <div className="call-left-sub-content">
                        <h2>Email</h2>
                        <h4>logistic@gmail.com</h4>
                    </div>
                   
                </div>
                --------------------------------------
                <div className="call-left-sub">
                    <div className="call-left-sub-logo"></div>
                    <div className="call-left-sub-content">
                        <h2>Office</h2>
                        <h4>Anywhere, street</h4>
                    </div>
                </div>
            </div>

        </div>


        <div className="call-right">
                <h2>Request a Quote Today</h2>

                <div className='call-box'>
                    <h4>Your Name</h4>
                    <input type="text" />
                </div>

                <div className='call-box'>
                    <h4>Email Adderss</h4>
                    <input type="text" />
                </div>

                <div className='call-box'>
                    <h4>Phone Number</h4>
                    <input type="text" />
                </div>

                <div className='call-box'>
                    <h4>Message</h4>
                    <input type="text" />
                </div>

                <div className="call-button">
                    <h3>Submit</h3>
                </div>
        </div>
    </div>
  )
}

export default Call