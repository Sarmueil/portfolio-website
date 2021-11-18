import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>  
          <h2>
          <div className='line'>  
            <span style={{fontSize:'2rem'}}>Samuel Adedoyin Adebisi</span>  
          </div>
            <div className='line'>
              <span>Building Full-stack Web And Mobile Applications</span>
            </div>
            <div className='line'>
              <span>is what I do.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='https://drive.google.com/file/d/18GPWKYyVfke0PCekaofBMzN8SYsUuc3A/view?usp=sharing' target="_blank">
              See my Resume <RightArrow />
            </a>
          </div>  
        </div>
      </div>  
    </section>
  );
};

export default Banner;
