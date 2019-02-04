import React from 'react';
const Footer = () => {
    return (
        <div align='center'>
            <footer >
                <div className='navbar'>
                    <div className='navbar__brand'>
                        <a href='#'>
                            <img src='logo/logowhite.png' alt='abz.agency logo'/>
                        </a>   
                    </div>
                    <div className='navbar__header'>
                        <ul>
                          <li><a href='#'>About me</a></li>
                          <li><a href='#'>Relationships</a></li>
                          <li><a href='#'>Requirements</a></li>
                          <li><a href='#'>Users</a></li>
                          <li><a href='#'>Sign up</a></li>
                        </ul> 
                    </div>
                    <div className='clearfix'></div>
                </div>
          <hr/>
                <div className='table1'>
                    <div className='table1__row'><img src='icons/mail.svg' alt='icon'/>
                        <span>work.of.future@gmail.com</span>
                    </div>
                    <div className='table1__row'><img src='icons/phone.svg' alt='icon'/>
                        <span>+38 (050) 7892498</span>
                    </div>
                    <div className='table1__row'><img src='icons/cellphone.svg' alt='icon'/>
                        <span>+38 (095) 5560845</span>
                    </div>
                </div>        
                <div className='table2'>
                    <div className='table-element'>News</div>
                    <div className='table-element'>Overview</div>
                    <div className='table-element'>Tutorials</div>
                    <div className='table-element'>FAQ</div>
                    <div className='table-element'>Blog</div>
                    <div className='table-element'>Design</div>
                    <div className='table-element'>Resources</div>
                    <div className='table-element'>Terms</div>
                    <div className='table-element'>Partners</div>
                    <div className='table-element'>Code</div>
                    <div className='table-element'>Duides</div>
                    <div className='table-element'>Conditions</div>
                    <div className='table-element'>Stop</div>
                    <div className='table-element'>Collaborate</div>
                    <div className='table-element'>Examples</div>
                    <div className='table-element'>Help</div>
                </div>
                <div className='clearfix'></div>
                <div className='footer__text'>
                    <p>© abz.agency specially for the test task  </p>
                </div>
                <div className='footer__social-icons'>
                    <a href='#'><img src='icons/facebook.svg' alt='abz.agency icon' /></a>
                    <a href='#'><img src='icons/linkedin.svg' alt='abz.agency icon' /></a>
                    <a href='#'><img src='icons/instagram.svg' alt='abz.agency icon' /></a>
                    <a href='#'><img src='icons/twitter.svg' alt='abz.agency icon' /></a>
                    <a href='#'><img src='icons/pinterest.svg' alt='abz.agency icon' /></a>
                </div>
                <div className='clearfix'></div>
            </footer>
        </div>

)
}
export default Footer;