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
              <span>Building Full-stack Web And Mobile Applications is</span>
            </div>
            <div className='line'>
              <span>what I do.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              See my Resume <RightArrow />
            </a>
          </div>  
        </div>
      </div>  
    </section>
  );
};

export default Banner;
