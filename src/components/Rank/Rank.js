import React from 'react';
import './Rank.css';

const Rank =({name, entries}) => {
    return (
        <div className='rank-text'>
            <div className=''>
            {`Welcome ${name}! `}
            </div>
            {name === 'Guest' ?
            <div className=''>
            <p>Try as much as you'd like!</p>
            </div>
            :
            <div className=''>
            {` Number of images entered: ${entries}`}
            </div>

            }
        </div>

    );
}
export default Rank;
