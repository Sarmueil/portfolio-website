import React from "react";
import Carousel from 'react-elastic-carousel'
import Carol from '../components/Carol'

const breakPoints = [
  {width:1, itemsToShow: 1},
  {width:550, itemsToShow: 2},
  {width:768, itemsToShow: 3},
  {width:1200, itemsToShow: 3} 
]

const projectImg = [
  {
    image: '/images/snipeL.png',
    gitHub:'https://github.com/Sarmueil/snipe-ecommerce',
    live:'https://decamoviesnet.netlify.app/'
  },
  {
    image:'/images/decamoviesL.png',
    gitHub:'https://github.com/Sarmueil/DecaMovieWebApp',
    live:'https://decamoviesnet.netlify.app/'
  },
  {
    image: '/images/retinaL.png',
    gitHub:'https://github.com/Sarmueil/Retina',
    live:'https://decamoviesnet.netlify.app/'
  },
]

const Projects = () => {
  return (
    <div className='page'>
      <div className='container'>  
       <div className='row'>
           <div style={{width:'100%', borderRadius:'20px', paddingBottom:'1.8rem'}}>
           <div>
        <div style={{marginTop:'1rem', marginBottom:'.5rem', width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2 style={{color:'black', fontSize:'2.5rem', marginLeft:'2rem', cursor:'pointer'}}>Projects</h2>
       </div>

        <Carousel  breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={5000}>
          {
           projectImg.map((el,index)=>(
             <Carol projectImg={el} key={index}/>
          ))
        }
       </Carousel> 
      </div> 
           </div>
        </div>
        </div>
        </div>
  );
};

export default Projects ;