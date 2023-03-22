import React, { useRef, useState } from 'react'

import "./hero.css"
import { Aboutmoon } from './Aboutmoon';
import { trusted } from 'mongoose';
export const Hero = () => {

  const [chng, chngstyl] = useState();
  const [chng1, chngstyl1] = useState();
  const [chng2, chngstyl2] = useState();
  const [chng3, chngstyl3] = useState(true);
  const [chng4, chngstyl4] = useState();
  // const handleToggleMute = () => chngstyl3(current => !current);
  return (
    //google drive
    // https://drive.google.com/file/d/1wq5JUU0JBacU6W3eyXVb-X7uB9lJjIz1/view?usp=sharing
    //cloudflare
    //  https://res.cloudinary.com/djpgrx4y8/video/upload/v1679254148/moonstone/moonstonevid_ndcpyn.mp4
    <div className="hero-con">
      <video autoPlay muted={chng3} loop id="hero" >
        <source src="https://res.cloudinary.com/djpgrx4y8/video/upload/v1679254148/moonstone/moonstonevid_ndcpyn.mp4" type="video/mp4" />
      </video>
      <div className="pause" style={{
        transition: "transform 1s ease",
        transitionDelay: "0.5s",
        transitionProperty: "transform",
        transform: chng4
      }}
        onClick={() => {
          chngstyl("rotate(90deg)")
          chngstyl1("scale(1)")
          chngstyl2("scale(1)")
          chngstyl3(current => !current)
          chngstyl4("scale(0)")
        }}
      >
        <img src="./images/pause.png" alt="" />
      </div>
      <div className="screener" style={{
        transition: "transform 0s ease",
        transitionDelay: "0.5s",
        transitionProperty: "transform",
        transform: chng2
      }}
      >
        <div className="hero">
         
          <div className="circle" style={{
            transitionDelay: "0.3s",
            transitionProperty: "transform",
            transform: chng1
          }} onClick={() => {
            chngstyl("rotate(110deg)")
            chngstyl1("scale(10)")
            chngstyl2("scale(0)")
            chngstyl4("scale(0.5)")
            chngstyl3(current => !current)
          }}>
            <div className="triangle" style={{
              transitionDelay: "0s",
              transitionProperty: "transform",
              transform: chng,



            }} ></div>
          </div>
          <div className="hcircle"
          style={{
            transitionDelay: "0.3s",
            transitionProperty: "transform",
            transform: chng1
          }} onClick={() => {
            chngstyl("rotate(110deg)")
            chngstyl1("scale(10)")
            chngstyl2("scale(0)")
            chngstyl4("scale(0.5)")
            chngstyl3(current => !current)
          }}
          ></div>
        </div>

        <div className="logotyp-con">
          <div className="logo1 " >
            <img src='./images/logomono.png' class="img-fluid rounded mx-auto d-block p-2" alt="" />
          </div>
          <div className='text-end m-2'> 
            <p style={{color:"white"}}>Sponsored by : <img src="/images/navigation.jpg" style={{width:"30px",height:"30px"}}/></p>
          </div>
          <div className="typ"  style={{marginTop:"0px"}}>
            <Aboutmoon />
          </div>
        </div>
      </div>
    </div>
  )
}
