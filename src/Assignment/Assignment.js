import React from 'react';
import './Assignment.css';

const Assignment =()=> {
    return (
    <div align='center'>
        <div className='assignment'>
            <div className='assignment__text'>
                <h1> Test assignment for</h1>
                <h1> Frontend Developer</h1>
                <h1> position</h1>
                <div className='assignment__text-h5'>
                    <p>We kindly remind you that your test assignment should be submitted as a link to 
                    github/bitbucket repository. <span id='mobile-displaynone'>Please be patient, we consider and respond to every 
                    application that meets minimum requirements. We look forward to your submission. 
                    Good luck!</span></p>
                </div>  
                <button href='#' className='button-orange'>Sign Up</button>
            </div>         
        </div>
    </div>
)
}

export default Assignment;