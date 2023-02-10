import React from 'react'
import img1 from '../../Assets/Images/Progress.png'

const Progress = () => {
    return (
        <>
            <div className="progress-1">
                <div className="progress-img">
                    <img src={img1}
                        alt="progress"/>
                </div>
                <div className="progress-content">
                    <div className="first">
                        <div className='progress-content-head'>100%</div>
                        <div className='progress-content-sub-head'>We have 100% of client satisfaction level</div>
                    </div>
                    <div className="second">
                        <div className='progress-content-head'>250%</div>
                        <div className='progress-content-sub-head'>we have massive growth rate of 250%</div>
                    </div>
                    <div className="third">
                        <div className='progress-content-head'>5.0</div>
                        <div className='progress-content-sub-head'>We have rating of 5 star in top rating sites</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress;
