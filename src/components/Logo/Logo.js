import React from 'react';
import './Logo.css';
import brain from './brain.png';

const Logo = ({onClick}) => {
    return (
        <div className='logo' onClick={() => onClick('home')}>
            <img src={brain} alt='logo'/>
        </div>

    );
}
export default Logo;
