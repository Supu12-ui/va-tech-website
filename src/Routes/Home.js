import  {useState,useEffect} from 'react';
import React from 'react';
import Heading from '../Pages/HomePage/Heading';
import Support from '../Pages/HomePage/Support';
import Progress from '../Pages/HomePage/Progress';
import Info from '../Pages/HomePage/Info';
import Services from '../Pages/HomePage/Services';
import img1 from "../Assets/Images/officeImg.jpg";
import img2 from "../Assets/Images/contactImg.jpg";
import img3 from "../Assets/Images/officeImg1.jpg";
import img4 from "../Assets/Images/officeImg2.jpg";
import Testimonials from '../Pages/HomePage/Testimonials';


const Home = () => {
    const images = [
        img1,
        img3,
        img4,
       
       ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 4000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentImageIndex]);
    
      const currentImage = images[currentImageIndex];
    return (
        <>
            <div className="shrink main-box" >
                <Heading/>
                <Support/>
                <Progress/>
                <Info img={currentImage}
                    
                    
                    headText="Create brands ideas that can connect"
                    subHeadText="Get to know how we work, who we are and what we value on this all means beautiful web page"
                    />
                    
                <Services/>
                <Info img={img2}
                    headText="What is Agile Development?"
                    subHeadText="Get to know how we work, who we are and what we value on this all means beautiful web page"/>
                <Testimonials/>
            </div>
        </>
    )
}

export default Home;
