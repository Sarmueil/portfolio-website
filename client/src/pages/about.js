import React from "react";

const About = () => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
          {/* <h3>This is the About page</h3> */}
            <div className="about_main">
              {/* about_text */}
               <h2 className="about_header">About</h2> 
              <div className="about_text">
                  <p className="about_texta">Hello. I'm Samuel Adedoyin Adebisi and I'm a multi-talented
                    human. Most of my time I design and build responsive, production-ready user interfaces and amazing websites.</p>
                   <p className="textb">Since beginning my journey as a Web Developer, nearly 2 years ago, I've done remote work for companies, consulted for startups, 
                   and collaborated with talented people to create the best user experience for both business and consumer use. 
                   I'm quietly confident,naturally curious, and perpetually working on improving my skills one project at a time.</p>
                   <p className="textb">I write javascript mainly on both the client-side and server side. I work with React.js and Next.js on the front-end as well as Node.js on the back-end. I find myself working most of the time with frontend technologies
                    which makes it my relatively stronger area of software development. I also do product designing with tools like figma and adobeXD</p>
                    <p className="textb">
                    I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself,
                       and do interesting things that matter.
                    </p>
                    <p className="textb">
                    My journey as a developer started already in 2019, after that I got my bachelor's degree in Human Physiology from the University of Ibadan, Oyo State, Nigeria. I started working as a front-end developer for a start-up named Parakletus Hub, which is aimed at providing eduaction solutions to nigerian undergraduates. I helped delevoped a product called para-learn
                    which helps student share and and learn course across specific nigerian univeristies. I got an intership position at Decagon institute, lagos an intern for 4months where i got to work on many projects that required me using my knowlege of javscript both on the client and server side. After the internship, i started work with decagon as a mid-level front-end developer. 
                    I have also worked on contract as a front-end developer with lumskin, a company based in Los angeles, USA.
                    </p>
                    <p className="textb">
                    Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented
                spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
                    </p>
                   <a href="https://drive.google.com/file/d/18GPWKYyVfke0PCekaofBMzN8SYsUuc3A/view?usp=sharing" target="_blank"><h3 className="textc">Resume</h3></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
