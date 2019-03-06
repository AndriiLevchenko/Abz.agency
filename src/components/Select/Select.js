import React from 'react';
import './Select.css';


const Select = props => {
//    const inputType = props.type || 'email';
//    const cls=['register__input input'];
//    const htmlFor= `${inputType}-${Math.random()}`

//    if(isInvalid(props)){
//        cls.push('invalid');
//    }
        return(
            <div className='register__select'>
                            <select name='position' onChange={props.onChange}>
                                <option>  {props.newUsersPosition}</option>
                                <option value='Controler'>Controler</option>
                                <option value='Advertising specialist'>Advertising specialist</option>
                                <option value='Designer'>Designer</option>
                                <option value='Frontend developer'>Frontend developer</option>
                                <option value='Backend developer'>Backend developer</option>
                                <option value='QA'>QA</option>
                            </select>
                            <img src='imgs/arrow.png' alt='arrow' />
                        </div>  
        ) 
}
export default Select;