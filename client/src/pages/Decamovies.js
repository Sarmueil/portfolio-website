import { width } from "@mui/system";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import '../styles/App.css'

const Decamovies = () => {
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
           <div style={{height:'70vh', width:'100%', }}>
                 <h1 style={{fontSize:'1.5rem', marginRight:'1rem', marginBottom:'1rem'}}>decaMovies</h1>
                 <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                      <div style={{flex:'1', width:'75%', marginLeft:'2rem', backgroundColor:'black',padding:'2rem',alignSelf:'center',zIndex:'99'}}>
                            <h3 style={{color:'white'}}>Quick Brief</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>decaMovies is a movie listing web application, which allows users to search for their favourite and latest movies and get relevant information about these movies
                           such as the rating, actors, budget, duration, as well as the movie synopsis. Movie data is gotten from The movie database-TMDB.</p>
                            
                           <h3 style={{color:'white'}}>User Experience</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>Upon visiting <a href="https://decamoviesnet.netlify.app/">decamoviesnet.netlify.app</a>Users will be able search for the latest and old movies and check for Facts about the movie. 
                             The app has a nice user interface that makes easier for users to use with nice layout and spinners that renders on the page when movie data being searched for is waiting to be served to the client </p>
                           <h3 style={{color:'white'}}>Techologies Used</h3>
                           <p style={{color:'white',fontSize:'1rem'}}>React.js, Styled-components, Context API for global state management and Data fetch from TMDB,</p>
                    <div className="icons">
                     <a href="https://github.com/Sarmueil/DecaMovieWebApp"  target="_blank"><GitHubIcon className="icons_a" style={{color:'white', fontSize:'2.5rem'}}/></a>
                   <a href="https://decamoviesnet.netlify.app/"  target="_blank"><WebIcon className="icons_a" style={{color:'white', fontSize:'2.5rem'}}/></a>
                 </div>

                      </div>
                      <div style={{flex:'1',width:'80%',padding:'1rem'}}>
                      <img src="/images/deca1.png" alt="" style={{marginLeft:'-20px',marginTop:'-10px', width:'100%', objectFit:'cover'}}/>
                     <img src="/images/deca2.png" alt="" style={{marginLeft:'-48px',width:'100%',objectFit:'cover'}}/>
                      </div>
                 </div>
           </div>   
        </div>
      </div>
    </div>
  );
};

export default Decamovies;
   
