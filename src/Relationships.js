import React from 'react';
const Relationships = () => {
    return (
        <div align='center'>
            <div className='relationships'>
                <div className='relationships__text'>
                    <h1>About my relationships with</h1>
                    <h1>web-development</h1>
                </div>
                <div className='relationships__technologies'>
                    <div className='web-technology'>
                        <img src='imgs/html.svg' alt='html'/>
                        <h3>I'm in love with HTML</h3>
                        <p>Hypertext Markup Language (HTML) is the</p>
                        <p> standard markup language for creating</p>
                        <p> web pages and web applications.</p>
                    </div>
                    <div className='web-technology'>
                        <img src='imgs/css.svg' alt='css' />
                        <h3>CSS is my best friend</h3>
                        <p>Cascading Style Sheets (CSS)</p>
                        <p> is a style sheet language used for</p>
                        <p> describing the presentation of a</p>
                        <p> document written in a markup</p>
                        <p> language like HTML.</p>
                    </div>
                    <div className='web-technology'>
                        <img src='imgs/javascript.svg' alt='javascript' />
                        <h3>JavaScript is my passion</h3>
                        <p>JavaScript is a high-level, interpreted</p>
                        <p> programming language. It is a language </p>
                        <p>that is also characterized as dynamic,</p>
                        <p> weakly typed, prototype-dased and</p>
                        <p> multi-paradigm.</p>
                    </div>  
                    <div className='clearfix'></div>
                </div>
            </div>
        </div>
)
}


export default Relationships;