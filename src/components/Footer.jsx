import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const footer = ()=>{
return(
    <footer className="foot">   
      <div className="container" >
        <h3>Company</h3><a href="#"></a>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Brand Assets</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>
      <div className="container">
        <h3>Community</h3>
        <ul>
          <li><a href="#">API Documentation</a></li>
          <li><a href="#">Knowledge Base</a></li>
          <li><a href="#">Network Status</a></li>
          <li><a href="#">Newsletters</a></li>
          
        </ul>
      </div>
      <div className="container">
        <h3>Services</h3>
        <ul>
          <li><a href="#">API Plans</a></li>
          <li><a href="#">Priority Support</a></li>
          <li><a href="#">Advertise</a></li>
          
        </ul>
      </div>    
      <div className="social">
        <h3>Follow Us</h3>
        <div id="social">
         <a href="#" ><FaFacebook/></a><br/>
        &nbsp;<a href="#" ><FaTwitter/></a><br/>
        &nbsp;<a href="#" ><FaInstagram/></a><br/>
        &nbsp;<a href="#" ><FaGithub/></a>
          
        </div>
      </div>
     
    <br/>
       
<div id="cr"> 
    <h5>Blockscan &copy; 2024 </h5>
    
    </div>

    </footer>
);

}

export default footer;