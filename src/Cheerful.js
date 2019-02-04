import React from 'react';
const Cheerful = () => {
    return (
         <div align='center'>
    <div className="cheerful">
      <h1>Our cheerful users</h1>
      <h5>Attention! Sorting users by registration date</h5>
            <div className="cheerful__card">
                <div className="cheerful__picture">
                    <img src='imgs/user-noah-2x.jpg' alt='photogpaphy' />
                </div>
                <div className="cheerful__text">
                        <h4>Noah</h4>   
                        <p className='p-position'>Leading specialist of the Control Department</p>
                        <p className='p-email'>noah.controldepartment@gmail.com</p>
                        <p className='p-telephone'>+38 (050) 6780324</p>          
                </div>  
            </div>
            <div className="cheerful__card">
                <div className="cheerful__picture">
                    <img src='imgs/user-adolph-2x.png' alt='photogpaphy'/>
                </div>
                <div className="cheerful__text">
                        <h4>Adolph Blaine Charles David Earl</h4>      
                        <p className='p-position'>The contextual advertising specialist</p>
                        <p className='p-email'>adolph.blainecharles-davidearl@gmail.com</p>
                        <p className='p-telephone'>+38 (095) 5560845</p>          
                </div>  
            </div>
            <div className="cheerful__card">
                <div className="cheerful__picture">
                    <img src='imgs/user-liam-2x.jpg' alt='photogpaphy'/>
                </div>
                <div className="cheerful__text">
                        <h4>Liamgrievescasey Smith Wiam</h4>            
                        <p className='p-position'>Lead designer</p>
                        <p className='p-email'>liamgrievescasey@example.com</p>
                        <p className='p-telephone'>+38 (050) 2739332</p>                
                </div>
            </div>  
            <div className="cheerful__card">
                <div className="cheerful__picture">
                    <img src='imgs/user-elizabeth-2x.jpg' alt='photogpaphy'/>
                </div>
                <div className="cheerful__text">
                        <h4>Elizabeth</h4>                  
                        <p className='p-position'>Frontend developer</p>
                        <p className='p-email'>elizabet.frontend@gmail.com</p>
                        <p className='p-telephone'>+38 (095) 9246637</p>               
                </div>
            </div>
            <div className="cheerful__card">
                <div className="cheerful__picture">
                    <img src='imgs/user-alexander-2x.jpg' alt='photogpaphy' />
                </div>
                <div className="cheerful__text">
                        <h4>Alexander</h4>          
                        <p className='p-position'>Backend developer</p>
                        <p className='p-email'>alexander.backend@gmail.com</p>
                        <p className='p-telephone'>+38 (050) 7892409</p>              
                </div>
            </div>
            <div className="cheerful__card">
                <div className="cheerful__picture">
                    <img src='imgs/user-mason-2x.jpg' alt='photogpaphy' />
                </div>
                <div className="cheerful__text">
                        <h4>Mason</h4>
                        <p className='p-position'>QA</p>
                        <p className='p-email'>mason.qa@gmail.com</p>
                        <p className='p-telephone'>+38 (095) 2832700</p>       
                </div>
            </div>  
            <div className='clearfix'></div>
      <button href="#" className="  button">Show more</button>      
    </div>
    </div>
)
}
export default Cheerful;