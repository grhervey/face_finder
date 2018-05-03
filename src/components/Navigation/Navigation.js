import React from 'react';
import './Navigation.css';
import Button from '../Button/Button';

const Navigation =({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
                <div className='nav-container'>
                    <h1 className='nav-title' onClick={() => onRouteChange('entry')}>Face Finder</h1>
                    <div className='button-container'>
                        <Button label='sign out' onClick={() => onRouteChange('signout')}/>

                    </div>
                </div>
            );
        } else {
            return (
                <div className='nav-container'>
                    <h1 className='nav-title' onClick={() => onRouteChange('entry')}>Face Finder</h1>
                    <div className='button-container'>
                        <Button label='sign in' onClick={() => onRouteChange('signin')}/>
                        <Button label='register' onClick={() => onRouteChange('register')}/>
                    </div>
                </div>
            );
        }
}
export default Navigation;
