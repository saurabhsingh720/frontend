// import React from 'react'
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useContext } from "react";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By ❤️Saurabh.</div>
      <div>
        <Link to={'https://www.linkedin.com/in/saurabh-singh-ab008b228'} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={'https://x.com/SaurabhSingh_72'} target="_blank">
          <FaTwitter />
        </Link>
        <Link to={'https://www.instagram.com/enzo_7_20/'} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to={'https://github.com/saurabhsingh720'} target="_blank">
          <FaGithub />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
