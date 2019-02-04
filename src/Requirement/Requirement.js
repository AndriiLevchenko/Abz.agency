import React from 'react';
import './Requirement.css';

const Requirement = () => {
    return (
        <div align='center'>
    <div className="requirement">
        <h2>General requirements for the test task</h2>
        <div className="requirement__text">
            <p> Users want to find answers to their questions quickly and data shows that people really 
            care about how quickly their pages load. The Search team announced speed would be a ranking signal 
            for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor 
            for mobile searches too.   </p>
            <br/>       
            <p>If you are developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-word user&#8209;centric performance metrics. </p>
            <br/>
            <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Active and the Chrome User Experiance Report - our public dataset for key UX metrics as experienced by Chrome users under real&#8209;world conditions.  </p>
        </div>
        <div className="requirement__picture" >
            <img src="imgs/man-laptop-v1.svg" alt="man"  id='picture-v1' />
            <img src="imgs/man-laptop-v2.svg" alt="man"  id='picture-v2' />
            <a  name='#requirementvnature'></a>
        </div>
        <div className="clearfix"></div>
    </div>  
    </div>
    )
}
export default Requirement;