import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import '../styles/App.css';


const Contact = () => {
  const formRef = useRef();
  const [done, setDone ] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6jndfnk",
        "template_sm33gik",
        formRef.current,
        "user_fpwJKPaihvD0yZIljVHY3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='page'>
      <div className='container'>
        <div className='row'>
          <div>
            
          <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="/images/phone.png" alt="" className="c-icon" />
              +234 7062837954
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/images/email.png" alt="" />
              sarmuelypmd@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/images/address.png" alt="" />
              Asajon way, sangotedo, Lagos State
            </div>  
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for a full-time position as well as
            freelancing if the right project comes along. me.
          </p>
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <h3 style={{fontSize:'1rem', marginLeft:'1rem', color:'green'}}>Message sent sucessfully,Thank you...I'll reply you shortly</h3>}
          </form>
        </div>
      </div>
    </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
   