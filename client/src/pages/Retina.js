import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import '../styles/App.css'

const Retina = () => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
        <div style={{height:'70vh', width:'100%', }}>
                 <h1 style={{fontSize:'1.5rem', marginRight:'1rem', marginBottom:'1rem'}}>Retina</h1>
                 <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                      <div style={{flex:'1', width:'75%', marginLeft:'2rem', backgroundColor:'black',padding:'2rem',alignSelf:'center',zIndex:'99'}}>
                            <h3 style={{color:'white'}}>Quick Brief</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>Retina is Geo location based traval web app as well as an image sharing app that helps users to share their experience in a certain location</p>
                            
                           <h3 style={{color:'white'}}>User Experience</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>Upon visiting <a href="#">retina.com</a>Users will be able to create pins on the map which is their exact location at the moment and post images and share with others their experience of the place, this will give other users more information about that partucular location </p>
                           <h3 style={{color:'white'}}>Techologies Used</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>React.js, MongoDB, Node.JS, Express.js, CSS frameworks - Tailwind CSS, Material-UI Icons, Other Tools, React map GL, Mapbox API</p>
                    <div className="icons">
                     <a href="https://github.com/Sarmueil/Retina"  target="_blank"><GitHubIcon className="icons_a" style={{color:'white', fontSize:'2.5rem'}}/></a>
                   <a href="#"  target="_blank"><WebIcon className="icons_a" style={{color:'white', fontSize:'2.5rem'}}/></a>
                 </div>

                      </div>
                      <div style={{flex:'1',width:'80%',padding:'1rem'}}>
                      <img src="/images/retinaa.png" alt="" style={{marginLeft:'-20px',marginTop:'-10px', width:'100%'}}/>
                     <img src="/images/retinab.png" alt="" style={{marginLeft:'-48px',width:'100%'}}/>
                      </div>
                 </div>
                 </div>
        </div>
      </div>
    </div>
  );
};

export default Retina;