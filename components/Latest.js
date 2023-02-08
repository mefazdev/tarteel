import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Latest() {

    const data = [
        {
          iframe: "https://www.youtube.com/embed/IyI0VetolSE",
        },
        {
          iframe: "https://www.youtube.com/embed/Y12nfOcFhpI",
        },
        {
          iframe: "https://www.youtube.com/embed/_yi34dxmhLA",
        },
        {
          iframe: "https://www.youtube.com/embed/IyI0VetolSE",
        },
        {
          iframe: "https://www.youtube.com/embed/IyI0VetolSE",
        },
      ]
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <div className='latest'>
        <h1>Latest Releases</h1>
         <div className='latest__carosel__div'>
  
      
        <Carousel
     
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
        //   autoPlay={true}
        //   customTransition={"ease 1000ms"}
        //   autoPlaySpeed={1000}
          keyBoardControl={true}
        //   transitionDuration={2000}
          customTransition={"ease 1000ms"}
        //   removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //   itemClass="popular__animation"
        >
          {data.map((data,i) => {
            return (
              <div className="latest__item" key={i}>
                <iframe
                  style={{borderRadius:'3px'}}
                  width="250"
                  height="200"
                
                  src={data.iframe}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <h2>Heavenly Order-Lesson 03 Spiritual Arguments</h2>
              </div>
            );
          })}
        </Carousel>
      </div></div>
    )
}
