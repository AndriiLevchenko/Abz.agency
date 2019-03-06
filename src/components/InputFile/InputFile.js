import React from 'react';
import './InputFile.css';

const InputFile = props => {
        return(
            <div className='register__upload'>
                <label htmlFor='file-upload' className='register__upload-button__label'>
                    <div className='register__upload-button' onChange={props.onChange} >Upload</div>
                    {props.selectedFile.name}
                </label>
                <input id='file-upload' type='file' name='photo' onChange={props.onChange} />                       
                <label htmlFor="file" className='register__upload__label'>
                    File format jpg up to 5MB, the minimum size of 70x70px
                </label>
            </div>   
        ) 
}
export default InputFile;