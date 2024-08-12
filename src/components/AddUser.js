import { React, useState } from 'react';
import './addUser.scss';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const AddUser = ( props ) => {
    const {setActionValue} = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('male');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorMesssage, setErrorMessage] = useState('');
    const [isValid,setIsValid] = useState(false);

// Validation all fields
const validateForm = () => {
    setErrorMessage('');
    const isValidForm=validateName()&&validateEmail()&&validatePhone();
    console.log('isValid ', isValidForm);
    if(!isValidForm) {
        setIsValid(false);
        setErrorMessage('Input fields are required.');
   }else {
        setIsValid(true);
        setErrorMessage('');
   }
   return isValidForm;
}

// Email Validation
const validateEmail = () => {
    let regEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const isValidEmail=regEmail.test( email );
    console.log( 'isValidEmail ', isValidEmail );
    if( !isEmpty( email ) && !isValidEmail ){
        setErrorEmail( 'Enter valid Email!' );
    }else {
        setErrorEmail('');
  }
   return isValidEmail;
}

// Phone Validation
const validatePhone = () => {
    let regPhone = new RegExp('^[6-9][0-9]{9}$');
    console.log('isValidNo ', phone);
    const isValidPhone=regPhone.test(phone);
    console.log('isValidNo ', isValidPhone, phone);
    console.log('isPhonempty ', isEmpty( phone ), !isEmpty(phone));
    if(!isValidPhone) {
       setErrorPhone('Enter valid Phone Number!');
    }else {
       setErrorPhone('');
    }
    return isValidPhone;
}

//name validation
const validateName = () => {
    let regName = /[a-zA-Z\s-]+$/;
    const isValidName = regName.test(name);
    console.log('isValidName ', isValidName);
    if( !isValidName ){
        setErrorName('Enter valid Name!');
     } else {
        setErrorName('');
     }
     return isValidName;
}

//form submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formsubmit   ',
            name,
            email,
            gender,
            phone
        );
        const payload = {
            'id': uuidv4(),
            'name': name,
            'email': email,
            'phone': phone,
            'gender': gender,
        }
        axios.post('https://localhost:44339/api/users', payload)
        .then((response) =>  window.alert( 'User added successfully' ))
        .catch((error) => console.log(error));
        setActionValue('');
    };

   // Reset handler
    const handleReset = () => {
        setName('');
        setEmail('');
        setPhone('');
        setGender('male');
        setErrorMessage('');
        setErrorEmail('');
        setErrorName('');
        setErrorPhone('');
    };

    return (
        <div className='addUser'>
            <fieldset className='addUser__fieldset'>
                <div className='addUser__fieldset__close'>
                     <div className='addUser__fieldset__close__image' onClick={() => {setActionValue('');} }>x</div>
                </div> 
                <h1 className='addUser__title'>Add User Details</h1>
                <form className='addUser__fieldset__form' action='#' method='get'>
                    <div className='addUser__fieldset__form__field'>
                    <label className='addUser__fieldset__form__field__labelName' for='name'>
                        Name*
                    </label>
                    <input
                        type = 'text'
                        name = 'name'
                        id = 'name'
                        className = 'addUser__fieldset__form__field__name'
                        value = {name}
                        onChange = {(e) => {
                                    setName(e.target.value);
                                    }}
                        onKeyUp = {(e) => {
                                    if(name) {validateName();}
                                   }}
                        placeholder='Enter Name'
                        required
                    />
                     {<div className='addUser__fieldset__form__field__ErrorMessage'>{!isEmpty(errorName)?errorName:''}</div>}
                    </div>
                    <div className='addUser__fieldset__form__field'>
                    <label className='addUser__fieldset__form__field__labelEmail' for='email'>Enter Email* </label>
                    <input
                        type = 'email'
                        name = 'email'
                        id = 'email'
                        className = 'addUser__fieldset__form__field__email'
                        value = {email}
                        onChange = {( e ) => {
                                      setEmail(e.target.value);
                                    }}
                        onKeyUp = {( e ) => {
                                    if(email) {validateEmail();}
                                  }}
                        placeholder = 'Enter email'
                        required
                    />
                    {<div className='addUser__fieldset__form__field__ErrorMessage'>{!isEmpty(errorEmail)?errorEmail:''}</div>}
                    </div>
                    <div className='addUser__fieldset__form__field'>
                    <label className='addUser__fieldset__form__field__labelPhone' for='tel'>Phone*</label>
                    <input
                        type = 'tel'
                        name = 'phone'
                        id = 'phone'
                        className = 'addUser__fieldset__form__field__phone'
                        value = {phone}
                        maxLength = '10'
                        minLength = '10'
                        onChange = {(e) => {
                                     setPhone(e.target.value);
                                    }}
                        onKeyUp = {( e ) => {
                                     if(phone) {validatePhone();}
                                   }}
                        placeholder = 'Enter Phone number'
                        required = {true}
                    />
                    {<div className='addUser__fieldset__form__field__ErrorMessage'>{!isEmpty(errorPhone)?errorPhone:''}</div>}
                    </div>
                    <div className='addUser__fieldset__form__field'>
                    <label className='addUser__fieldset__form__field__labelGender' for='gender'>Gender*</label>
                    <input
                        type = 'radio'
                        className = 'addUser__fieldset__form__field__genderMale'
                        name = 'gender'
                        value = 'male'
                        id = 'male'
                        checked = {gender === 'male'}
                        onChange = {(e) => setGender(e.target.value)}
                    />
                    Male
                    <input
                        type = 'radio'
                        className = 'addUser__fieldset__form__field__genderFemale'
                        name = 'gender'
                        value = 'female'
                        id = 'female'
                        checked = {gender === 'female'}
                        onChange = {(e) => setGender(e.target.value)}
                    />
                    Female
                    <input
                        type = 'radio'
                        className = 'addUser__fieldset__form__field__genderOthers'
                        name = 'gender'
                        value = 'other'
                        id = 'other'
                        checked = {gender === 'other'}
                        onChange = {(e) => setGender(e.target.value)}
                    />
                    Other
                    </div>
                    {<div className='addUser__fieldset__form__generalErrorMessage'>{!isEmpty(errorMesssage)?errorMesssage:''}</div>}
                    <div  className='addUser__fieldset__form__actions'>
                        <button
                            className = 'addUser__fieldset__form__actions__resetAction'
                            type='reset'
                            value='reset'
                            onClick={() => handleReset()}
                        >
                            Reset
                        </button>
                        <button
                            className='addUser__fieldset__form__actions__submitAction'
                            type='submit'
                            value='Submit'
                            onClick={(e) => {
                                        if (validateForm()) {
                                            handleSubmit(e); 
                                        }else {
                                            e.preventDefault();}}}
                        >
                            Submit
                        </button>
                    </div>      
                </form>
            </fieldset>
        </div>
    );
}

export default AddUser;
