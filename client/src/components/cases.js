import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import ProgressiveImage from "react-progressive-image";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "decaMovies",
    title: "A Movie database Listing Web App for Search",
    img: "/images/decamovies.png",
    link:'/decamovies'
  },
  {
    id: 2,
    subtitle: "Snipe Stores",
    title: "An Ecommerce Plaftorm to for footwear brands",
    img: "/images/snipe.png",
    link:'/snipestores'
  },
  {
    id: 3,
    subtitle: "Retina",
    title: "Geo location based Image sharing Web app",
    img: "/images/retina.png",
    link:'/retina'
  }
];

const Cases = () => {
  return (  
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <NavLink to='/projects' exact>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
          </NavLink>
        </div>
       
        <div className='row'>
          {caseStudies.map(caseItem => (
             <NavLink to={caseItem.link} exact>
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div> 
              <div className='case-image'>
                <img
                  src={caseItem.img}
                  alt={caseItem.title}
                />
              </div>
            </div>
            </NavLink>
          ))}
        </div>     
      </div>
    </section>
  );
};

export default Cases;
