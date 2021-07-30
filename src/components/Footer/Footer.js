import React from 'react' 
import './Footer.css'
const Footer = ()=>{
    return (
        <div className="footer">
             <span className="name">
                NewsWeb made by -{" "}
                <a href="https://www.linkedin.com/in/hitesh-chandravadiya-11835119a/" target="__blank">
                Hitesh Chandravadiya 
                </a> 
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                
            </div>
        </div>
    );
}
export default Footer;