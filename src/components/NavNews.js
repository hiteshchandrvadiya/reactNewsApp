import React from 'react'
import './NavNews.css'
import HamburgerIconDrawer from './HamburgerIconDrawer'
const NavNews = ({setCategory})  => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburgerIconDrawer setCategory={setCategory}/>
            </div>
            <img 
                style={{cursor:"pointer"}}
                src="logo512.png"
                height="80%"
                alt="logo"
            />
        </div>
    );
}
export default NavNews