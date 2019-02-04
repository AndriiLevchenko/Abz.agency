import React from 'react';
import './Relationships.css';

const Relationships = () => {
    return (
        <div align='center'>
            <div className='relationships'>
                <div className='relationships__text'>
                    <h2>About my relationships with web-development</h2>
                </div>
                <div className='relationships__technologies'>
                    <div className='web-technology'>
                        <img src='imgs/html.svg' alt='html' />
                        <div className='web-technology__text'>
                            <h5>I'm in love with HTML</h5>
                            <p>Hypertext Markup Language (HTML) is the standard markup language for creating 
                            web pages and web applications.</p>
                        </div>    
                    </div>
                    <div className='web-technology'>
                        <img src='imgs/css.svg' alt='css' />
                        <div className='web-technology__text'>
                            <h5>CSS is my best friend</h5>
                            <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the 
                            presentation of a document written in a markup language like HTML.</p>                          
                        </div>    
                    </div>
                    <div className='web-technology'>
                        <img src='imgs/javascript.svg' alt='javascript' />
                        <div className='web-technology__text'>
                            <h5>JavaScript is my passion</h5>
                            <p>JavaScript is a high-level, interpreted programming language. It is a language which 
                            is also characterized as dynamic, weakly typed, prototype-dased and multi-paradigm.</p>
                        </div>
                    </div>     
                    <div className='clearfix'></div>
                </div>
            </div>
        </div>
)
}


export default Relationships;