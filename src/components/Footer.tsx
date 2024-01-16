import React from 'react'
import '../styles/footer.css'
import { useTheme } from './ThemeContext';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`horizontal-footer ${theme}`}>
        <a href="https://github.com/huangr0867" target="_blank">
            <div className="icon-text">
                <FaGithub size={22}/>
                <div>Github</div>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/ryanyukihuang/" target="_blank">
            <div className="icon-text">
                <FaLinkedin size={22}/>
                <div>LinkedIn</div>
            </div>
        </a>
        <a href="mailto: ryan_y_huang@brown.edu" target="_blank">
            <div className="icon-text">
                <MdEmail size={24}/>
                <div>Email</div>
            </div>
        </a>
            
    </div>
  )
}

export default Footer