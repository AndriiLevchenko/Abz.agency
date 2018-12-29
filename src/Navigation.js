import React from 'react';

const Navigation = () => {
    return (
    <div align='center'>
        <div className='navigation'>   
            <div className='navbar__brand'>
                <a  href='#'>
                    <img src='logo/logo.svg' alt='logo'/>
                </a>      
            </div>
            <div className='navbar__header'>
              	<ul>
    	            <li><a href='#'>About me</a></li>
    	            <li><a href='#'>Relationships</a></li>
    	            <li><a href='#'>Requirements</a></li>
    	            <li><a href='#'>Users</a></li>
    	            <li><a href='#'>Sign Up</a></li>
              	</ul> 
               	<button type='button'>
    	            <span className='icon-bar'></span>
    	            <span className='icon-bar'></span>
    	            <span className='icon-bar'></span>
    	        </button>  
            </div>
            <div className='navbar__superstar'>
            	<div className='navbar__superstar-button'>
            		 <img src='Icons/upload.png' alt='upload'/>
            	</div>
            	<div className='navbar__superstar-img'>
            		 <img src='imgs/superstar.jpg' alt='superstar'/>
            	</div>
            	<div className='navbar__superstar-text'>
            		<p >Superstar</p>
            		<p><span>Superstar@gmail.com</span></p>
            	</div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
)
}

export default Navigation;