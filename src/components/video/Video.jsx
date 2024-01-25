import React from 'react'
import './video.css';
import logistic from './logistic.mp4'

function Video() {
    return (


        <div className="video-main">
            <div className='play-video'>
                <video className='video' autoPlay loop muted>
                    <source src={logistic} type='video/mp4' />
                </video>
                <div className="heading-container">
                    <h1 className="video-heading">SEE IT IN ACTION</h1>
                </div>
            </div>
        </div>


    )
}

export default Video