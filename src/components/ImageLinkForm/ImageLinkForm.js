import React from 'react';
import './ImageLinkForm.css'
import Button from '../Button/Button';


const ImageLinkForm =({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <div className=''>
                <div className='input-detect-container'>
                <p>Copy this:</p>
                <p>http://cvl-demos.cs.nott.ac.uk/vrn/queue/59b4192763dd4.jpg</p>
                    <input className='' type='text' onChange={onInputChange} placeholder={'Paste it here'} />
                    <Button className='detect'
                    onClick={() => onButtonSubmit()} label='Detect'/>
                </div>

            </div>
        </div>

    );
}
export default ImageLinkForm;
