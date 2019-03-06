import React, {Component} from 'react';
import './Registration.css';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/storage';
import config from '../firebase-config';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';
import InputFile from '../components/InputFile/InputFile';

firebase.initializeApp (config);
const storage=firebase.storage();
function validateEmail(email) {
     var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

class Registration extends Component{
        state={
            username: '',
            usersArray: '',
            userslist: '',

            newUsersName: ' ',
            newUsersEmail: ' ',
            newUsersPhone: '    +38 (___) ___ __ __' ,
            newUsersPosition: '  Select your position',
            selectedFile: {name: ' Upload your photo'},
            avatar: '',
            progress: 0,
            url:'', 



            validationState: {
                inputName: {
                    newUsersNameEmailPhone: ' ',
                    placeholder: '   Your name',
                    name: 'Name',
                    errorMessage: 'Enter your Name',
                    valid: 'false',
                    touched: 'false',
                    validation:{
                        required: 'true',
                    }
                },
                inputEmail: {
                    newUsersNameEmailPhone: ' ',
                    placeholder: '   Your email',
                    name: 'Email',
                    errorMessage: 'Enter your Email',
                    valid: 'false',
                    touched: 'false',
                    validation:{
                        required: 'true',
                        email:  'true',
                    }
                },
                inputPhone: {
                    type: 'text',
                    newUsersNameEmailPhone: '    +38 (___) ___ __ __',
                    placeholder: '    +38 (__time_) ___ __ __',
                    name: 'Phone',
                    errorMessage: 'Enter your phone',
                    valid: 'false',
                    touched: 'false',
                    validation:{
                        required: 'true',
                        minlength: 23,
                    }
                }
            },
            isNameEmailPhoneValid: 'true',
            isFormSelectValid: 'false',
            isFormUploadValid: 'false',
            isFormValid: 'false'
        }
                                 //Получение userslist.json с сервера
        componentDidMount(){
            axios.get('https://abzagency.firebaseio.com/userslist.json').then(response =>{
                this.setState({usersArray: response, userslist: Object.values(response)});
            });
        }
                                //Получение введенных данных из формы с валидацией
       
        validateControl(value, validation){
            if(!validation){return 'true'};
            let isValid = 'true';
            if(validation.required){
                isValid = value !=='' && isValid;
                console.log(value);
            }
            if(validation.email){
               isValid = validateEmail(value) ? isValid : undefined;   
            }
            if(validation.minlength){

                isValid = value.length >= validation.minlength ? isValid : undefined;
                 console.log(value, value.length, validation.minlength, isValid);  
               
            }
            return isValid;
        }

        handleChangeNameEmailPhone = (event, controlName) =>{

            console.log(`${controlName}:`, event.target.value);
            const formControls = {...this.state.validationState};
            const control = {...formControls[controlName]};

                    //Запись в State введенных в Input-ы данных Name, Email, Phone и их валидация
                 if(control.name === 'Name'){ this.setState({newUsersName: control.newUsersNameEmailPhone})};
                 if(control.name === 'Email'){ this.setState({newUsersEmail: control.newUsersNameEmailPhone})};
                 if(control.name === 'Phone'){ this.setState({newUsersPhone: control.newUsersNameEmailPhone})};

            control.newUsersNameEmailPhone = event.target.value;
                console.log(event.target);

            control.touched = 'true';
            control.valid = this.validateControl(control.newUsersNameEmailPhone, control.validation);
            formControls[controlName] = control;

            let isFormValid= 'true';
            let isNameEmailPhoneValid = 'true';
            Object.keys(formControls).forEach(name =>{
                isNameEmailPhoneValid=formControls[name].valid && isNameEmailPhoneValid;
                console.log(formControls[name].placeholder, isNameEmailPhoneValid)
            });
           
            this.setState({validationState: formControls, isNameEmailPhoneValid: isNameEmailPhoneValid});
              console.log(this.state.newUsersPosition, isNameEmailPhoneValid);
            isFormValid = isNameEmailPhoneValid && this.state.isFormSelectValid && this.state.isFormUploadValid;
            this.setState({ isFormValid}, () => { console.log( this.state.isFormValid);  });
            //   console.log('file:  ', this.state.selectedFile );
            console.log('position:  ', this.state.newUsersPosition !== '  Select your position');
             console.log('file:  ', this.state.selectedFile.name !== " Upload your photo");
             console.log('окончательно NameEnailPhone:  ', this.state.isFormValid);
          
        }
                     //Запись в State Position выбранного из формы Select и его валидация
        handleChangeSelect = event =>{
            console.log(event.target.value);
            const newUsersPosition =  event.target.value;
            this.setState({newUsersPosition });
                let isFormValid= this.state.isFormValid;
                let isFormSelectValid = newUsersPosition !== '  Select your position';
                isFormValid = this.state.isNameEmailPhoneValid && isFormSelectValid && this.state.isFormUploadValid;
                console.log(this.state.newUsersPosition);
                console.log( 'isFormSelectValid : ', isFormSelectValid);
                            this.setState({ isFormSelectValid, isFormValid}, () => { console.log( this.state.isFormValid);  });
                               console.log('position:  ', newUsersPosition  );
                           
        
             console.log('file:  ', this.state.selectedFile.name !== " Upload your photo");
               console.log('окончательно Select:  ', this.state.isFormValid);
        }

                         //Запись в State фотографии из формы Input и ее валидация
        handleChangeFile =event=> {
            const selectedFile=event.target.files[0];
            this.setState({selectedFile});
            let isFormValid= this.state.isFormValid;
            let isFormUploadValid = selectedFile.name !== " Upload your photo";
            console.log('isFormValid до того как setState:  ', isFormUploadValid );
            isFormValid = this.state.isNameEmailPhoneValid && this.state.isFormSelectValid && isFormUploadValid;
                         console.log('select:  ', this.state.newUsersPosition );
                        console.log('file:  ', selectedFile.name );
                         console.log('isFormValid до того как setState но после уточнения:  ', isFormValid );
                        this.setState({ isFormValid}, () => { console.log( this.state.isFormValid);  });
                         
                        console.log('position:  ', this.state.newUsersPosition !== '  Select your position');
             console.log('file:  ', selectedFile.name !== " Upload your photo");
               console.log('окончательно Upload:  ', this.state.isFormValid);
        }

                                //Формирование нового User и внесения в список userslist.json на сервере 
        fileUploadHandler =(e) =>{
            e.preventDefault();

            // Upload file
            const {selectedFile}=this.state;    
            const uploadTask=storage.ref(`avatars/${selectedFile.name}`).put(selectedFile);
            uploadTask.on('state_changed', 
                (snapshot) =>{
                    const progress=Math.round(snapshot.bytesTransferred/snapshot.totalBytes*100);
                    this.setState({progress});
                }, 
                (error) =>{console.log(error)}, 
                () =>{
                    storage.ref('avatars').child(selectedFile.name).getDownloadURL().then(url =>{
                        this.setState({url});
                                            //Формирование нового User
                        const newUser={
                            "listid":Object.values(this.state.usersArray.data).length + 1,
                            "picture":this.state.url,          
                            "name":this.state.newUsersName,
                            "position":this.state.newUsersPosition,
                            "email":this.state.newUsersEmail,
                            "telephone":this.state.newUsersPhone
                        }
                        console.log(newUser);
                                            //Добавление нового User
                        axios.post('https://abzagency.firebaseio.com/userslist.json', newUser).then(response => {
                           console.log( response );
                        } 
                        ).catch(error => console.log(error));
                    });
                } 
            );     
        }
      
        renderInputs(){
            return Object.keys(this.state.validationState).map((controlName, index) =>{
                const control = this.state.validationState[controlName];

                return(
                    <Input
                        key={controlName+index}
                        type={control.type}
                        value={control.newUsersNameEmailPhone}
                        placeholder={control.placeholder}
                        name={control.name}
                        label={control.label}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => this.handleChangeNameEmailPhone(event, controlName)}
                    />
                )
            })
        }

    render(){
            //const controlName=this.state.validationState.inputName;
            //const controlEmail=this.state.validationState.inputEmail;
            //const controlPhone=this.state.validationState.inputPhone;
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
                       
                                {/*  Render Input Name, Input Email, Input Phone */}              
                        {this.renderInputs()}

                                {/*  Render Select Position */}
                        <Select 
                            newUsersPosition={this.state.newUsersPosition}
                            onChange={event => this.handleChangeSelect(event)}
                        /> 

                                {/*  Render File Upload */}
                        <InputFile
                            onChange={this.handleChangeFile}
                            selectedFile={this.state.selectedFile}
                        />  


{/*   Это все надо удалить
                        // <div className='register__upload'>
                        //     <label htmlFor='file-upload' className='register__upload-button__label'>
                        //         <div className='register__upload-button' onChange={this.handleChangeFile} >Upload</div>
                        //         {this.state.selectedFile.name}
                        //     </label>
                        //     <input id='file-upload' type='file' name='photo' onChange={this.handleChangeFile} />                       
                        //     <label htmlFor="file" className='register__upload__label'>
                        //         File format jpg up to 5MB, the minimum size of 70x70px
                        //     </label>
                        // </div>   
           */} 




                        <button  className="register__button" onClick={this.fileUploadHandler} disabled={!this.state.isFormValid}>
                            Sign Up
                        </button>
                    </form>     
                </div>
            </div>
        )
    }
}

export default Registration;