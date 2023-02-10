import React from 'react';
import img1 from "../../Assets/Images/google.jpg";
import img2 from "../../Assets/Images/sony.jpg";
import img3 from "../../Assets/Images/stack.jpg";
import img4 from "../../Assets/Images/microsoft.jpg";
const Values = () => {
    return (
        <>

            <div className='support'>
                <div className="support-heading">
                    We work with some of the worlds{" "}
                    <span style={
                        {color: "blue"}
                    }>Leading{" "} </span>
                    companies.
                </div>


                <div className="img-container-company">
                    <img src={img1}
                        alt="google"/>
                    <img src={img2}
                        alt="sony"/>
                    <img src={img3}
                        alt="stack"/>
                    <img src={img4}
                        alt="microsoft"/>
                </div>
            </div>
        </>
    )
}

export default Values;
