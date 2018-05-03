import React from 'react';
import './Rank.css';

const Rank =({name, entries}) => {
    return (
        <div className='rank-text'>
            <div className=''>
            {`${name}, your current entry count is . . .`}
            </div>
            {name === 'Guest' ?
            <div className=''>
            <p>Try as much as you'd like!</p>
            </div>
            :
            <div className=''>
            {entries}
            </div>

            }
        </div>

    );
}
export default Rank;
