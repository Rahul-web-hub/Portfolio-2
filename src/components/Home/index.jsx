import React  from "react";
import "./styles.css";
import photo from ".//photo1.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faTwitter,faGithub,faGoogle,faInstagram} from '@fortawesome/free-brands-svg-icons';





function Home(){

   

    return(
    <>
  <section className="content">
  <div className="floating-windows">
     <div className="floating-window">
        <a href="https://www.linkedin.com/in/rahul-singh-3b0951225/" className="floating-link">
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon"/> 
        </a>
     </div>
     <div className="floating-window">
        <a href=" " className="floating-link">
        <FontAwesomeIcon icon={faTwitter} size="3x" className="icon"/> 
        </a>
     </div>
     <div className="floating-window">
        <a href="https://github.com/Rahul-web-hub" className="floating-link">
        <FontAwesomeIcon icon={faGithub} size="3x" className="icon" />  
        </a>
     </div>
     <div className="floating-window">
        <a href="buky6180@gmail.com" className="floating-link">
        <FontAwesomeIcon icon={faGoogle} size="3x" className="icon" /> 
        </a>
     </div>
     <div className="floating-window">
        <a href="https://www.instagram.com/rahul_singhh__28/" className="floating-link">
        <FontAwesomeIcon icon={faInstagram} size="3x" className="icon" />   
        </a>
     </div>
  </div>
 <div className="heading">
<h1 className="heading">Hi, I'm Rahul </h1>
<p> focused on crafting websites that prioritize user experience, aiming for simplicity and an elegant design</p>
</div>
<div className="image">
    <img src={photo} alt="loading"></img>
</div>
</section>
      
 </>

    )
}

export default Home 