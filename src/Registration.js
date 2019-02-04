import React, {Component} from 'react';
import classes from './Registration.css';


class Registration extends Component{
    render(){
    return (
           <div className={classes.Registration} ref={this.myRef}>
                <h1>Register to get a work </h1>
                <h4>Attention! After successful registration and alert, update the list of users in the block from the top </h4>              
                <div className='register__form'>
                    <form>
                        <div className='register__input' >
                            <p>Name</p>
                            <input type='text' value='' placeholder='    Your name' />  
                        </div>
                        <div className="register__input">
                            <p>Email</p>    
                            <input type='email'  id='input__email-id' placeholder='Your email'/>
                        </div>
                        <div className="register__input">
                            <p>Phone</p>
                            <input type='text' value='    +38 (___) ___ __ __' />
                        </div>
                        <div className='register__select'>
                            <select name='position'>
                                <option>   Select your position</option>
                                <option value='Controler'>Controler</option>
                                <option value='Advertising specialist'>Advertising specialist</option>
                                <option value='Designer'>Designer</option>
                                <option value='Frontend developer'>Frontend developer</option>
                                <option value='Backend developer'>Backend developer</option>
                                <option value='QA'>QA</option>
                            </select>
                            <img src='imgs/arrow.png' alt='arrow' />
                        </div>  
                        <div className='register__upload'>
                            <label htmlFor='file-upload' className='register__upload-button__label'>
                                        Upload your photo
                                        <div className='register__upload-button'>Upload</div>
                            </label>
                            <input id='file-upload' type='file' name='photo'/>                       
                            <label htmlFor="file" className='register__upload__label'>
                                    File format jpg up to 5MB, the minimum size of 70x70px
                            </label>
                        </div>   
                        <button href="#" className="register__button">Sign Up</button>
                    </form>     
                </div>
            </div>
)
}
}

export default Registration;