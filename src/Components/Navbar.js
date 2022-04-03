import React, { useEffect, useState } from 'react';
import './Navbar.css';


function Navbar() {

    const [show, handleShow] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
              handleShow(true);
          }else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll");
      }
    
  }, [])

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            
            <img
            className="nav__logo"
             src="http://www.freepnglogos.com/uploads/netflix-logo-0.png
             "
            alt="NETFLIX" />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
            <div className="banner-extra">
               <a href="https://github.com/">Home </a>
               <a href="https://github.com/">Movies </a>
               <a href="https://github.com/">Television </a>
               <a href="https://github.com/">Originals </a>
               <a href="https://github.com/">Popular </a>
               <a href="https://github.com/">List </a>
                
           </div>
        </div>
    )
}

export default Navbar;