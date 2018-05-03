import React from 'react';
import './ImageLinkForm.css'
import Button from '../Button/Button';


const ImageLinkForm =({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p>
                {'This face finder will detect faces in your JPG image links. Give it a try!'}
            </p>
            <div className=''>
                <div className='input-container'>
                    <input className='' type='text' onChange={onInputChange} placeholder={'Copy and Paste JPG URL'} />
                    <Button className='detect'
                    onClick={() => onButtonSubmit()} label='detect'/>
                </div>
                <p>example: http://cvl-demos.cs.nott.ac.uk/vrn/queue/59b4192763dd4.jpg</p>
            </div>
        </div>

    );
}
export default ImageLinkForm;
