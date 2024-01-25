import React from 'react'
import './footer.css'
import { GiCargoShip } from "react-icons/gi";

function Footer() {
  return (
   
       <>
            <div className='footer-one'>
                <div className="footer-sub">
                    <div className="footer-sub-logo">
                        <div className='sub-logo'>
                            <div className="footer-sub-logo-left"><GiCargoShip style={{color:"rgba(52, 152, 219)", width:"50px",height:"50px"}} /></div>
                            <div className="footer-sub-logo-right">
                                <h2 style={{color:"rgba(52, 152, 219)"}}>MASS</h2>
                                <h4>SHIPPING</h4>
                                <p>The Best Shipping Experience</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, suscipit. Ducimus labore porro placeat, assumenda vitae corrupti iure, repellendus sint nobis, et harum excepturi! Facere suscipit ad ullam nulla in?</p>
                    </div>
        
                </div>
                <div className="footer-sub">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Homne</li>
                        <li>About Us</li>
                        <li>Gallery</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div className="footer-sub">
                    <h2>Recent Project</h2>
                    <img src="https://navata.com/cms/wp-content/uploads/2021/11/What-is-Logistics-for-eCommerce-2-1024x576.png" alt="" width={250} height={150} />
                </div>
                <div className="footer-sub">
                    <h2>Subscribe</h2>
                    <input type="text" />
                    <button>Subscribe Now</button>
                </div>
            </div>
    
            <div className="footer-two">
         
                <h4 style={{marginTop:"2%"}}>Copyright © 2023 massshipping</h4>
            </div>
       </>
   
  )
}

export default Footer