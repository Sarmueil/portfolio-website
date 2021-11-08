import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "decaMovies",
    title: "A Movie database Listing Web App for Search",
    img: "/images/decamovies.png"
  },
  {
    id: 2,
    subtitle: "Snipe Stores",
    title: "An Ecommerce Plaftorm to show footware brands",
    img: "/images/snipe.png"
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "/images/lumin-min.png"
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
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
