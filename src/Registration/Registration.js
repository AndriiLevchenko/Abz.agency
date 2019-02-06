import React, {Component} from 'react';
import './Registration.css';
import axios from 'axios';


class Registration extends Component{

        state={
            username: '',
            selectedFile: ' Upload your photo',
            usersArray: '',
            userslist: '',
            newUsersName: ' ',
            newUsersEmail: ' ',
            newUsersPhone: '    +38 (___) ___ __ __' ,
            newUsersPosition: ''
        }
                                 //Получение userslist.json с сервера
        componentDidMount(){
            axios.get('https://abzagency.firebaseio.com/userslist.json').then(response =>{
                this.setState({usersArray: response, userslist: Object.values(response)});
            });
        }
                                //Получение введенных данных из формы
        handleChangeName = event =>{
            console.log(event);
            let name = event.target.value;
            this.setState({
                newUsersName: name
            });
            console.log(this.state.newUsersName);
        }
        handleChangeEmail = event =>{
            console.log(event);
            let email = event.target.value;
            this.setState({
                newUsersEmail: email
            });
            console.log(this.state.newUsersEmail);
        }
        handleChangePhone = event =>{
            console.log(event);
            let phone = event.target.value;
            this.setState({
                newUsersPhone: phone
            });
            console.log(this.state.newUsersPhone);
        }
        handleChangeSelect = event =>{
             this.setState({
                newUsersPosition: event.target.value
            });
        }
        handleChangeFile =event=> {
            console.log(event.target);
               
                          this.setState({selectedFile: event.target.files[0].name});

                                console.log(this.state.selectedFile);
        }

                                //Формирование нового User и внесения в список userslist.json на сервере 
        fileUploadHandler =(e) =>{
            e.preventDefault();
            const newUser={
                "listid":Object.values(this.state.usersArray.data).length + 1,
                "picture":this.state.selectedFile,          
                "name":this.state.newUsersName,
                "position":this.state.newUsersPosition,
                "email":this.state.newUsersEmail,
                "telephone":this.state.newUsersPhone,
            }
            console.log(newUser);
                                //Добавление нового User
            axios.post('https://abzagency.firebaseio.com/userslist.json', newUser).then(response => {
               console.log( response )} )
               .catch(error => console.log(error));
        }
        

    render(){
       

        return (
           <div className='register'>
                <h2>Register to get a work </h2>
                <div className='register__h4'>
                    <h4>Attention! After successful registration and 
                    alert, update the list of users <br className="br"/>
                    in the block from the top </h4>
                </div>
                <div className='register__form'>
                    <form>
                        <div className='register__input' >
                            <p>Name</p>
                            <input type='email'  value={this.state.newUsersName} 
                                                 placeholder='   Your name'
                                                 name='name'
                                                 onChange={this.handleChangeName}
                            />  
                        </div>
                        <div className="register__input">
                            <p>Email</p>    
                            <input type='email'  id='input__email-id' 
                                                 value={this.state.newUsersEmail}
                                                 placeholder='Your email'
                                                 name='email'
                                                 onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className="register__input">
                            <p>Phone</p>
                            <input type='text'   value={this.state.newUsersPhone}
                                                 placeholder='    +38 (___) ___ __ __' 
                                                 name='phone'
                                                 onChange={this.handleChangePhone}
                            />
                        </div>
                        <div className='register__select'>
                            <select name='position' onChange={this.handleChangeSelect}>
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
                              
                                <div className='register__upload-button' onChange={this.handleChangeFile} >Upload</div>
                                 {this.state.selectedFile}
                            </label>
                            <input id='file-upload' type='file' name='photo' onChange={this.handleChangeFile} />                       
                            <label htmlFor="file" className='register__upload__label'>
                                    File format jpg up to 5MB, the minimum size of 70x70px
                            </label>
                        </div>   
                        <button  className="register__button" onClick={this.fileUploadHandler}>Sign Up</button>
                    </form>     
                </div>
            </div>
        )
    }
}

export default Registration;