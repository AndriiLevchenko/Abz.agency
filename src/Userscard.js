import React from 'react';

const Userscard = (props) =>{
	return(
		<div className='users__card' >
            <div className='users__picture'>
                <img src={props.picture} alt='photogpaphy' />                                   
            </div>
            <div className='users__text'>
                <h4>{props.name}</h4>   
                <p className='p-position'>{props.position}</p>
                <p className='p-email'>{props.email}</p>
                <p className='p-telephone'>{props.telephone}</p>          
            </div>  
        </div>
	)
}

export default Userscard
