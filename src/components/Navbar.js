import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#8DC73F' }}>
            <div className='navbar'>
                <Link to='/anniversary' className="nav-links" onClick= {closeMobileMenu}>
                    ✔️ Go to verify Your Airpods
                </Link>
           </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
