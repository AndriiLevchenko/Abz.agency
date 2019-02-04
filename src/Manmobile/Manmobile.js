import React from 'react';
import './Manmobile.css';

const Manmobile = () => {
    return (
        <div align='center'>
            <div className='man-mobile'>       
                <div className='man-mobile__picture'>
                     <img src='imgs/man-mobile.svg' alt='man'/>
                </div>
                <div className='man-mobile__text'>
                    <h2>Let's get acquainted</h2>
                    <div className='man-mobile__h4'>
                        <h3>I am cool frontend developer</h3>
                    </div>    
                    <div className='man-mobile__textp'>
                        <p>When real users have a slow expeariance on mobile, they're much less likely to find what they
                        are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load. </p>
                     
                        <p id='man-mobile__emptyLine'> Hidden</p>
                     
                        <p>Last week, Google Search and Ads teams announced two new speed initiatives ti help
                        improove user-experience on the web. </p>
                    </div>
                    <div className='man-mobile__button'>
                        <a href='#' >Sign Up</a>
                    </div>
                </div>
                <div className='clearfix'></div>
            </div>
        </div>
)
}


export default Manmobile;