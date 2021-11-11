import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import '../styles/App.css'

const Carol = ({ projectImg }) => {
    return (
        <div className="p">
        <div className="pbrowser">
        <a href={projectImg.gitHub} target="_blank" rel="noreferrer">
          <GitHubIcon style={{color:'black', fontSize:'1rem', cursor:'pointer'}} className="pcircle"/>
          </a>
          <a href={projectImg.live}   target="_blank" rel="noreferrer">
          <WebIcon style={{color:'black', fontSize:'1rem', cursor:'pointer'}} className="pcircle"/>
          </a>
        </div>   
            <a href={projectImg.live} target="_blank" rel="noreferrer">
              <img src={projectImg.image} alt="" className="pimg"/>
            </a>
      </div>
    )
}

export default Carol

        