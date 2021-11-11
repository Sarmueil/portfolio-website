import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import '../styles/App.css'

const Snipestores = () => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
        <div style={{height:'70vh', width:'100%', }}>
                 <h1 style={{fontSize:'1.5rem', marginRight:'1rem', marginBottom:'1rem'}}>Snipe Stores</h1>
                 <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                      <div style={{flex:'1', width:'75%', marginLeft:'2rem', backgroundColor:'black',padding:'2rem',alignSelf:'center',zIndex:'99'}}>
                            <h3 style={{color:'white'}}>Quick Brief</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>Snipe stores is an online ecommerce footwear brand store that allows users to shop and search fro available footwears brands.
                           It also allow users to have an account that help them buy their products and pay online. The payment intergration was implemented with flutterwave API</p>
                            
                           <h3 style={{color:'white'}}>User Experience</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>Upon visiting <a href="#">snipestores.com</a>Users will be able to search for and buy the available footwear brand products on the store, add to their cart and process payments as well as 
                           create user accounts also users will be able to add products to the paltform to sell to their customers </p>
                           <h3 style={{color:'white'}}>Techologies Used</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>React.js, MongoDB, Node.JS, Express.js, CSS frameworks - Styled-components, Material-UI Icons</p>
                    <div className="icons">
                     <a href="https://github.com/Sarmueil/snipe-ecommerce"  target="_blank"><GitHubIcon className="icons_a" style={{color:'white', fontSize:'2.5rem'}}/></a>
                   <a href="https://decamoviesnet.netlify.app/"  target="_blank"><WebIcon className="icons_a" style={{color:'white', fontSize:'2.5rem'}}/></a>
                 </div>

                      </div>
                      <div style={{flex:'1',width:'80%',padding:'1rem'}}>
                      <img src="/images/snipe1.png" alt="" style={{marginLeft:'-20px',marginTop:'-10px', width:'100%'}}/>
                     <img src="/images/snipe2.png" alt="" style={{marginLeft:'-48px',width:'100%'}}/>
                      </div>
                 </div>
                 </div>
        </div>
      </div>
    </div>
  );
};

export default Snipestores;