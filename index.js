const switchAccountsOption = document.querySelectorAll('.already-have-an-account, .dont-have-an-account'),
signUpForm = document.querySelector('.wrapper .signUpForm'),
loginForm = document.querySelector('.wrapper .loginForm'),
passwordEye = [signUpForm.querySelector('.password-wrapper button'), loginForm.querySelector('.password-wrapper button'), document.querySelector('.user-panel .edit-account .password-wrapper button'), document.querySelector('.wrapper .step3 .password-eye-wrapper button')],
signUpButton = signUpForm.querySelector('.signUpButton'),
loginButton = loginForm.querySelector('.loginButton'),
forgotPasswordButton = loginForm.querySelector('.forgot-password'),
forgotWrapper = document.querySelector('.wrapper4'),
proceedStep1Values = forgotWrapper.querySelector('.steps .value'),
proceedStep1Button = forgotWrapper.querySelector('.steps .proceed'),
backStep1Button = forgotWrapper.querySelector('.steps .back'),
firstnameStep2Input = forgotWrapper.querySelector('.steps .input-wrapper .fname'),
lastnameStep2Input = forgotWrapper.querySelector('.steps .input-wrapper .lname'),
proceedStep2Button = forgotWrapper.querySelector('.steps .proceed2'),
backStep2Button = forgotWrapper.querySelector('.steps .back2'),
step3Password = forgotWrapper.querySelector('.step3')['fpassword'],
step3ConfirmPassword = forgotWrapper.querySelector('.step3')['cfpassword'],
submitStep3Button = forgotWrapper.querySelector('.steps .submit'),
cancelStep3Button = forgotWrapper.querySelector('.steps .cancel'),
validatePromptSteps = forgotWrapper.querySelector('.validate-prompt-wrapper'),
accountsIndicatorNumber = document.querySelector('.wrapper .navigation button .num'),
accountsButton = document.querySelector('.wrapper .navigation button'),
accountsWrapper = document.querySelector('.wrapper .account-wrapper'),
accountsCloseButton = document.querySelector('.wrapper .account-wrapper button'),
colorWrapper = document.querySelector('.wrapper .navigation .color-wrapper'),
colorButton = colorWrapper.querySelector('button'),
promptWrapper = document.querySelector('.prompt-wrapper'),
closePromptWrapper = document.querySelector('.prompt-wrapper .prompt-content button'),
userPanel = document.querySelector('.user-panel'),
logoutButton = userPanel.querySelector('.logout-wrapper button'),
profile = userPanel.querySelector('.profile-wrapper #photo-profile'),
editAccountButton = userPanel.querySelector('.user-dashboard .button-wrapper .edit-info'),
editAccountSave = editAccountButton.parentElement.parentElement.querySelector('.edit-account .button-wrapper .save'),
editAccountCancel = editAccountButton.parentElement.parentElement.querySelector('.edit-account .button-wrapper .cancel'),
deleteAccountButton = userPanel.querySelector('.button-wrapper .delete-account'),
deletePrompt = userPanel.querySelector('.delete-prompt'),
confirmDeleteAccount = deletePrompt.querySelector('.confirm-delete'),
cancelDeleteAccount = deletePrompt.querySelector('.cancel-delete');

let _accounts = JSON.parse(localStorage.getItem('accounts')) || [],
container = [],
online = JSON.parse(localStorage.getItem('online')) || [],
mailExtentions = ['@gmail.com', '@yahoo.com'],
darkModeStatus = JSON.parse(localStorage.getItem('darkModeStatus')) || '';

//Onload
window.onload = e => {

  if(online.length > 0) {
    
    const login = new Open_Dashboard(loginForm);
    login.elementValidate();

  }

  if(_accounts.length > 0) {

    accountsWrapper.querySelector('.account-datas').style.display = 'flex';

    accountsWrapper.querySelector('h2 span').textContent = 'List of accounts';

    document.querySelector('.account-datas').innerHTML = accountsData(_accounts);

    accountsIndicatorNumber.style.display = 'block';

    setTimeout(() => accountsDataFunc(), 100);

  } else {

    accountsIndicatorNumber.style.display = 'none';

    accountsWrapper.querySelector('.account-datas').style.display = 'none';
    
    accountsWrapper.querySelector('h2 span').textContent = 'No accounts';

  }

  if(darkModeStatus === 'dark') {

    darkModeOn();

  } else {

    darkModeOff();

  }

}

//Regular Function
function isAlreadyTakenFunction(value) {

  value.classList.remove('red');
  value.classList.remove('green');
  value.classList.add('orange');
  const isTaken = new PopUps(value.name.replace(value.name.at(0),value.name.at(0).toUpperCase()), value.parentElement.querySelector('small'));
  isTaken.isTaken();
  
}

function signUpPasswordFunc(value) {

  if(value['password'].value === value['confirmpassword'].value) {
  
    value['password'].parentElement.parentElement.querySelector('small').classList.remove('show');

  } else {

    value['confirmpassword'].classList.remove('orange');
    value['confirmpassword'].classList.remove('green');
    value['confirmpassword'].classList.add('red');
    const isNotMatch = new PopUps(value['password'].name.replace(value['password'].name.at(0),value['password'].name.at(0).toUpperCase()), value['password'].parentElement.parentElement.querySelector('small'));
    isNotMatch.isNotMatch();
    
  }

}

function loginEmailFunc(value) {

  switch(value === value) {

    case  mailExtentions.filter(data => data === value.slice(-10)).length > 0  :

      loginForm['email'].classList.remove('green');
      loginForm['email'].classList.remove('red');
      loginForm['email'].classList.add('orange');
      const isNotYetRegistered = new PopUps(loginForm['email'].name.replace(loginForm['email'].name.at(0),loginForm['email'].name.at(0).toUpperCase()), loginForm['email'].parentElement.querySelector('small'));
      isNotYetRegistered.isNotYetRegistered();

      break;

    case  value.length < 11 ||
          mailExtentions.filter(data => data === value.slice(-10)) > 0 === false :

        loginForm['email'].classList.remove('green');
        loginForm['email'].classList.remove('orange');
        loginForm['email'].classList.add('red');
        const isInvalid = new PopUps(loginForm['email'].name.replace(loginForm['email'].name.at(0),loginForm['email'].name.at(0).toUpperCase()), loginForm['email'].parentElement.querySelector('small'));
        isInvalid.isInvalid();

      break;

    default: console.log('This is the loginEmailFunc');

      break;

  }

}

function loginPasswordFunc(value, value2) {

  loginForm['email'].classList.remove('orange');
  loginForm['email'].classList.remove('red');
  loginForm['email'].parentElement.querySelector('small').classList.remove('show');
  
  switch(value === value) {
    
    case value.value.length === 0 :
      
      const isRequired = new PopUps(loginForm['password'].name.replace(loginForm['password'].name.at(0),loginForm['password'].name.at(0).toUpperCase()), loginForm['password'].parentElement.parentElement.querySelector('small'));
      isRequired.isRequired();
      
        break;

    case value.value.length > 0 :

        value.classList.remove('red');
        value.classList.remove('green');
        value.classList.remove('orange');
        value2.filter(data => {

          return data.password === value.value;
          
        }).length > 0 ? loginSuccess(value, value2.filter(data => data.email === loginForm['email'].value && data.password === loginForm['password'].value)) : loginFailed(value);

        break;

    default: console.log('This is the loginPasswordFunc');

        break;

  }

}

function loginSuccess(value, data) {

  online = data;
  
  localStorage.setItem('online', JSON.stringify(online));
  
  loginForm['email'].classList.add('green');
  value.classList.remove('red');
  value.classList.remove('orange');
  value.classList.add('green');
  const login = new Open_Dashboard(loginForm);
  login.elementValidate();
  value.parentElement.parentElement.querySelector('small').classList.remove('show');

}

function loginFailed(value) {

  loginForm['email'].classList.remove('green');
  loginForm['email'].classList.remove('orange');
  loginForm['email'].classList.remove('red');
  value.classList.remove('green');
  value.classList.remove('orange');
  value.classList.add('red');
  const isWrongPassword = new PopUps(value.name.replace(value.name.at(0), value.name.at(0).toUpperCase()), value.parentElement.parentElement.querySelector('small'));
  isWrongPassword.isWrongPassword();

}

function accountsData(value) {

  let items = '';

  for(i = 0; i < value.length; i++) {

    items += `<button class="data-wrapper">

                <img src="${value[i].profile_picture}" alt="">
                <h4>${value[i].email}</h4>

              </button>`

              
  }
  
  return items;

}

function accountsDataFunc () {

  if(_accounts.length === 0) {

    accountsIndicatorNumber.style.display = 'none';

    accountsWrapper.querySelector('.account-datas').style.display = 'none';

    accountsWrapper.querySelector('h2 span').textContent = 'No accounts';

  } else {

    accountsWrapper.querySelector('.account-datas').style.display = 'flex';

    accountsWrapper.querySelector('h2 span').textContent = 'List of accounts';

    accountsIndicatorNumber.style.display = 'block';

  }

  accountsIndicatorNumber.textContent = _accounts.length;

  let accountsInfo = accountsWrapper.querySelectorAll('.account-datas button');
  
  accountsInfo.forEach(button => {

    button.onclick = e => {

      button.classList.add('clicked');
      setTimeout(() => button.classList.add('clicked'), 100);

      loginForm['email'].value = button.querySelector('h4').textContent;

      
      setTimeout(() => accountsWrapper.classList.remove('show'), 250);

    }

  })

}


function darkModeOn () {

  let darkmode = [

    colorWrapper,
    accountsButton,
    document.querySelector('body'),
    signUpForm,
    loginForm,
    userPanel.querySelector('.user-dashboard'),
    
    
  ].forEach(el => {
    
    el.classList.add('dark');
    
  })
  
  passwordEye.forEach(data => data.parentElement.classList.add('dark'));
  forgotWrapper.querySelectorAll('.steps').forEach(data => data.classList.add('dark'));

}

function darkModeOff () {

  let darkmode = [

    colorWrapper,
    accountsButton,
    document.querySelector('body'),
    signUpForm,
    loginForm,
    userPanel.querySelector('.user-dashboard'),
    
    
  ].forEach(el => {
    
    el.classList.remove('dark');
    
  })
  
  passwordEye.forEach(data => data.parentElement.classList.remove('dark'));
  forgotWrapper.querySelectorAll('.steps').forEach(data => data.classList.remove('dark'));

}

// Classes
class Switch {

  constructor(value) {

    this.form = value;

  }

  open = function() {

    switch(this.form === this.form) {

      case this.form.classList.contains('signUpForm'): this.loginFormFunc();

          break;

      case this.form.classList.contains('loginForm'): this.signUpFormFunc();

          break;
    }

  }

  loginFormFunc = function() {

    document.title = 'Login Page';
    const defaultSign = new ToDefault(this.form);
    defaultSign.toDefault();
    loginForm.parentElement.classList.add('show');
    return;

  }

  signUpFormFunc = function() {
    
    document.title = 'Sign Up Page';
    const defaultLog = new ToDefault(this.form);
    defaultLog.toDefault();
    signUpForm.parentElement.classList.add('show');
    return;

  }

}

class ToDefault extends Switch{

  constructor(value) {
    super(value);
  }

  toDefault () {

    switch(this.form === this.form) {

      case this.form.classList.contains('signUpForm') :

        this.defaultSignUp();

          break;

      case this.form.classList.contains('loginForm') :

        this.defaultLogin();

          break;

      case this.form.classList.contains('edit-account') :

        this.defaultEditAccount();

          break;

      default: console.log('This is the toDefault class');

          break;

    }

  }

  defaultSignUp () {

    this.form['firstname'].classList.remove('green');
    this.form['firstname'].classList.remove('red');
    this.form['firstname'].classList.remove('orange');

    this.form['lastname'].classList.remove('green');
    this.form['lastname'].classList.remove('red');
    this.form['lastname'].classList.remove('orange');

    this.form['number'].classList.remove('green');
    this.form['number'].classList.remove('red');
    this.form['number'].classList.remove('orange');

    this.form['email'].classList.remove('green');
    this.form['email'].classList.remove('red');
    this.form['email'].classList.remove('orange');

    this.form['password'].classList.remove('green');
    this.form['password'].classList.remove('red');
    this.form['password'].classList.remove('orange');

    this.form['confirmpassword'].classList.remove('green');
    this.form['confirmpassword'].classList.remove('red');
    this.form['confirmpassword'].classList.remove('orange');

    this.form['firstname'].value = '';
    this.form['lastname'].value = '';
    this.form['number'].value = '';
    this.form['email'].value = '';
    this.form['password'].value = '';
    this.form['confirmpassword'].value = '';
    signUpForm.querySelectorAll('.input-container small').forEach(remove => remove.classList.remove('show'));
    const defaultSignPass = new Toggle_Password(this.form);
    defaultSignPass.hide_password();

  }

  defaultLogin () {

    this.form['email'].classList.remove('green');
    this.form['email'].classList.remove('red');
    this.form['email'].classList.remove('orange');
    this.form['password'].classList.remove('green');
    this.form['password'].classList.remove('red');
    this.form['password'].classList.remove('orange');

    this.form['email'].value = '';
    this.form['password'].value = '';
    loginForm.querySelectorAll('.input-container small').forEach(remove => remove.classList.remove('show'));
    const defaultLoginPass = new Toggle_Password(this.form);
    defaultLoginPass.hide_password();

  }

  defaultEditAccount () {

    this.form.querySelector('.nnumber').classList.remove('orange');
    this.form.querySelector('.nnumber').classList.remove('red');
    this.form.querySelector('.nnumber').classList.remove('green');

    this.form.querySelector('.nemail').classList.remove('orange');
    this.form.querySelector('.nemail').classList.remove('red');
    this.form.querySelector('.nemail').classList.remove('green');

    this.form.querySelector('.password').classList.remove('orange');
    this.form.querySelector('.password').classList.remove('red');
    this.form.querySelector('.password').classList.remove('green');

    this.form.querySelector('.ncpassword').classList.remove('orange');
    this.form.querySelector('.ncpassword').classList.remove('red');
    this.form.querySelector('.ncpassword').classList.remove('green');
    
    this.form.querySelector('.ncpassword').value = '';

    const hide_password = new Toggle_Password(this.form);
    hide_password.hide_password();

    
  }

}

class PopUps {

  constructor(value1, value2) {

    this.element = value1;
    this.smallText = value2;

  }

  isRequired = function() {

    this.smallText.textContent = this.element + ' is required';
    this.smallText.classList.add('show');
    return;
    
  }
  
  isInvalid = function() {

    this.smallText.textContent = 'Invalid ' + this.element;
    this.smallText.classList.add('show');
    return;
    
  }
  
  isTaken = function() {
    
    this.smallText.textContent = this.element + ' is already taken';
    this.smallText.classList.add('show');
    return;

  }

  isNotYetRegistered = function() {

    this.smallText.textContent = this.element + ' is not yet registered';
    this.smallText.classList.add('show');
    return;

  }

  isNotMatch = function() {

    this.smallText.textContent = this.element + ' is not match';
    this.smallText.classList.add('show');
    return;

  }

  isWrongPassword = function() {

    this.smallText.textContent = this.element + ' is wrong ';
    this.smallText.classList.add('show');
    return;

  }

}

class Toggle_Password extends Switch{

  constructor(value) {
    super(value);
  }

  eyeChecker = function() {
    
    switch(this.form === this.form) {

      case !this.form.querySelector('.password-wrapper button').classList.contains('show') :
        
        this.show_password();
        
          break;

      case this.form.querySelector('.password-wrapper button').classList.contains('show') :
        
        this.hide_password();

          break;

      default: console.log('This is the toggle_password class method of show password');

          break;

    }

  }

  show_password = function() {

    switch(this.form === this.form) {

      case this.form.classList.contains('signUpForm') :

        this.form['password'].type = 'text';
        this.form['confirmpassword'].type = 'text';
        this.form['password'].parentElement.querySelector('button').classList.add('show');

          break;
        
      case this.form.classList.contains('loginForm') :
          
        this.form['password'].type = 'text';
        this.form['password'].parentElement.querySelector('button').classList.add('show');          
      
          break;

      case this.form.classList.contains('edit-account') :
          
        this.form.querySelector('.password-wrapper .password').type = 'text';
        this.form.querySelector('.ncpassword').type = 'text';
        this.form.querySelector('.password-wrapper .password').parentElement.querySelector('button').classList.add('show');
      
          break;

      case this.form.classList.contains('step3') :
          
        this.form['fpassword'].type = 'text';
        this.form['cfpassword'].type = 'text';
        this.form['fpassword'].parentElement.querySelector('button').classList.add('show');
      
          break;

      
      default: console.log('This is the show_password method from Toggle password');

        break;

    }

  }

  hide_password = function() {

    switch(this.form === this.form) {

      case this.form.classList.contains('signUpForm') :

        this.form['password'].type = 'password';
        this.form['confirmpassword'].type = 'password';
        this.form['password'].parentElement.querySelector('button').classList.remove('show');

          break;
        
      case this.form.classList.contains('loginForm') :
          
        this.form['password'].type = 'password';
        this.form['password'].parentElement.querySelector('button').classList.remove('show');
      
          break;

      case this.form.classList.contains('edit-account') :
          
        this.form.querySelector('.password-wrapper .password').type = 'password';
        this.form.querySelector('.ncpassword').type = 'password';
        this.form.querySelector('.password-wrapper .password').parentElement.querySelector('button').classList.remove('show');
      
          break;
          
      case this.form.classList.contains('step3') :
          
        this.form['fpassword'].type = 'password';
        this.form['cfpassword'].type = 'password';
        this.form['fpassword'].parentElement.querySelector('button').classList.remove('show');
    
        break;

      default: console.log('This is the hide_password method from Toggle password');

          break;

    }

  }

}

class Save {

  // Static Properties
  static profile_picture = 'img/blank.jpg';
  static middlename = '';
  static address = '';

  constructor(value) {

    this.form = value;

  }

  formValidate = function() {

    switch(this.form === this.form) {

      case this.form.classList.contains('signUpForm'):

        this.signUpValidate();

          break;

      case this.form.classList.contains('loginForm'):

        this.loginValidate();

          break;

      case this.form.classList.contains('edit-account'):

        this.editAccountValidate();

          break;

      case this.form.classList.contains('step1'):

        this.forgotStep1Validate();

          break;

      case this.form.classList.contains('step2'):

        this.forgotStep2Validate();

          break;

      case this.form.classList.contains('step3'):

        this.forgotStep3Validate();

          break;

      default: console.log('This is the Save Class')

          break;

    }

  }

  signUpValidate = function() {

    if
    (
      this.form['firstname'].value.length === 0 &&
      this.form['lastname'].value.length === 0 &&
      this.form['number'].value.length === 0 &&
      this.form['email'].value.length === 0 &&
      this.form['password'].value.length === 0 &&
      this.form['confirmpassword'].value.length === 0
    )
    {
      return alert(new Error(' Fields are required! '));
    }
    else {

      switch(this.form['firstname'] === this.form['firstname']) {

        case this.form['firstname'].value.length === 0 :

          this.form['firstname'].classList.remove('green');
          this.form['firstname'].classList.add('red');
          const isRequired = new PopUps(this.form['firstname'].name.replace(this.form['firstname'].name.at(0),this.form['firstname'].name.at(0).toUpperCase()), this.form['firstname'].parentElement.querySelector('small'));
          isRequired.isRequired();

            break;

        case this.form['firstname'].value.length > 0 :

          this.form['firstname'].classList.remove('red');
          this.form['firstname'].classList.add('green');
          this.form['firstname'].parentElement.querySelector('small').classList.remove('show');

            break;

      }

      switch(this.form['lastname'] === this.form['lastname']) {

        case this.form['lastname'].value.length === 0 :

          this.form['lastname'].classList.remove('green');
          this.form['lastname'].classList.add('red');
          const isRequired = new PopUps(this.form['lastname'].name.replace(this.form['lastname'].name.at(0),this.form['lastname'].name.at(0).toUpperCase()), this.form['lastname'].parentElement.querySelector('small'));
          isRequired.isRequired();

            break;

        case this.form['lastname'].value.length > 0 :

          this.form['lastname'].classList.remove('red');
          this.form['lastname'].classList.add('green');
          this.form['lastname'].parentElement.querySelector('small').classList.remove('show');

            break;

      }

      switch(this.form['number'] === this.form['number']) {

        case this.form['number'].value.length === 0:

          this.form['number'].classList.remove('orange');
          this.form['number'].classList.remove('green');
          this.form['number'].classList.add('red');
          const isRequired = new PopUps(this.form['number'].name.replace(this.form['number'].name.at(0),this.form['number'].name.at(0).toUpperCase()), this.form['number'].parentElement.querySelector('small'));
          isRequired.isRequired();
          
          break;
          
        case this.form['number'].value.length < 6:

          this.form['number'].classList.remove('orange');
          this.form['number'].classList.remove('green');
          this.form['number'].classList.add('red');
          const isInvalid = new PopUps(this.form['number'].name.replace(this.form['number'].name.at(0),this.form['number'].name.at(0).toUpperCase()), this.form['number'].parentElement.querySelector('small'));
          isInvalid.isInvalid();
          
            break;

        case this.form['number'].value.length > 6:

          _accounts.filter(data => {

            return data.number === this.form['number'].value;

          }).length > 0 ? isAlreadyTakenFunction(this.form['number']) : 
                          this.form['number'].classList.remove('red') ||
                          this.form['number'].classList.remove('orange') ||
                          this.form['number'].classList.add('green') ||
                          this.form['number'].parentElement.querySelector('small').classList.remove('show');

            break;

        default: console.log('This is the validation for mobile number');

          break;

      }

      switch(this.form['email'].value === this.form['email'].value) {

        case this.form['email'].value.length === 0:

          this.form['email'].classList.remove('orange');
          this.form['email'].classList.remove('green');
          this.form['email'].classList.add('red');
          const isRequired = new PopUps(this.form['email'].name.replace(this.form['email'].name.at(0),this.form['email'].name.at(0).toUpperCase()), this.form['email'].parentElement.querySelector('small'));
          isRequired.isRequired();
            
            break;

        case  this.form['email'].value.length < 11:

          this.form['email'].classList.remove('orange');
          this.form['email'].classList.remove('green');
          this.form['email'].classList.add('red');
          const isInvalid = new PopUps(this.form['email'].name.replace(this.form['email'].name.at(0),this.form['email'].name.at(0).toUpperCase()), this.form['email'].parentElement.querySelector('small'));
          isInvalid.isInvalid();
            
            break;

        case  this.form['email'].value.length > 10 &&
        mailExtentions.filter(data => data === this.form['email'].value.toLowerCase().slice(-10)).length > 0 === true :

                _accounts.filter(data => {

                  return data.email === this.form['email'].value;

                }).length === 1 ? isAlreadyTakenFunction(this.form['email']) : 
                                  this.form['email'].classList.remove('red') ||
                                  this.form['email'].classList.remove('orange') ||
                                  this.form['email'].classList.add('green') ||
                                  this.form['email'].parentElement.querySelector('small').classList.remove('show');
            
                  break;

        case  this.form['email'].value.length > 10 &&
              mailExtentions.filter(data => data === this.form['email'].value.toLowerCase().slice(-10)).length > 0 === false:

                this.form['email'].classList.remove('orange');
                this.form['email'].classList.remove('green');
                this.form['email'].classList.add('red');
                const isInvalid1 = new PopUps(this.form['email'].name.replace(this.form['email'].name.at(0), this.form['email'].name.at(0).toUpperCase()), this.form['email'].parentElement.querySelector('small'));
                isInvalid1.isInvalid()
            
                  break;

        default: console.log('This is the email validation switch');
            
            break;

      }

      switch(this.form['password'] === this.form['password']) {

        case this.form['password'].value.length === 0 :

          const isRequired = new PopUps(this.form['password'].name.replace(this.form['password'].name.at(0),this.form['password'].name.at(0).toUpperCase()), this.form['password'].parentElement.parentElement.querySelector('small'));
          isRequired.isRequired();

            break;

        case this.form['password'].value.length > 0 : signUpPasswordFunc(this.form)

            break;

        default: console.log('This is the password switch');

            break;

      }

      if(this.form['password'].value.length > 0) {
        
        this.form['password'].classList.remove('red');

        if(this.form['confirmpassword'].value.length > 0) {

          if(this.form['confirmpassword'].value === this.form['password'].value) {

            this.form['password'].classList.remove('red');
            this.form['password'].classList.add('green');
            this.form['confirmpassword'].classList.remove('red');
            this.form['confirmpassword'].classList.add('green');

            setTimeout(() => this.sendingDataValidation(), 100);
  
          } else {
  
            this.form['password'].classList.remove('green');
            this.form['password'].classList.add('red');
            this.form['confirmpassword'].classList.remove('green');
            this.form['confirmpassword'].classList.add('red');
  
          }

        } else {

          this.form['confirmpassword'].classList.add('red');

        }

      } else {

        this.form['password'].classList.remove('green');
        this.form['password'].classList.add('red');

      }

    }

  }

  loginValidate = function() {

    if
    (
      this.form['email'].value.length === 0 &&
      this.form['password'].value.length === 0
    )
    {

      this.form['email'].classList.remove('green');
      this.form['password'].classList.remove('green');
      this.form['email'].classList.add('red');
      this.form['password'].classList.add('red');
      alert(new Error('Fields are required!'));

    }
    else {

      switch(this.form['email'] === this.form['email']) {

        case this.form['email'].value.length === 0 :

          const isRequired = new PopUps(this.form['email'].name.replace(this.form['email'].name.at(0), this.form['email'].name.at(0).toUpperCase()), this.form['email'].parentElement.querySelector('small'));
          isRequired.isRequired();

            break;

        case this.form['email'].value.length > 0 :

          _accounts.filter(data => {

            return data.email === this.form['email'].value;

          }).length > 0 ? loginPasswordFunc(this.form['password'], _accounts.filter(data => data.email === this.form['email'].value)) : loginEmailFunc(this.form['email'].value);

            break;

        default: console.log('This is the email validation switch for login');

            break;

      }

    }

  }

  forgotStep1Validate () {

    if(this.form['value'].value.length === 0) {

      this.form['value'].classList.remove('orange');
      this.form['value'].classList.remove('green');
      this.form['value'].classList.add('red');
      const isRequired = new PopUps('Input', this.form['value'].parentElement.querySelector('small'));
      isRequired.isRequired();

    } else {

      container = _accounts.filter(data => data.email === this.form['value'].value || data.number === this.form['value'].value);

      if(_accounts.filter(data => data.email === this.form['value'].value || data.number === this.form['value'].value).length > 0 === true) {

        this.form['value'].classList.remove('red');
        this.form['value'].classList.remove('orange');
        this.form['value'].classList.add('green');
        this.form['value'].parentElement.querySelector('small').classList.remove('show');
        
        if(this.form['value'].value.includes('@')) {

          this.forgotStep1Success('Email');

        } else {

          this.forgotStep1Success('Mobile Number')

        }

      } else {

        this.form['value'].classList.remove('red');
        this.form['value'].classList.remove('green');
        this.form['value'].classList.add('orange');
        const isInvalid = new PopUps('no match data', this.form['value'].parentElement.querySelector('small'));
        isInvalid.isInvalid();

      }

    }

  }

  forgotStep2Validate () {

    if(container.filter(data => data.firstname === this.form['fname'].value ||     this.form['lname'].value).length > 0 === true) {

      validatePromptSteps.classList.add('show');

      let counter = parseInt(validatePromptSteps.querySelector('h2').textContent);

      let myFunc = setInterval(() => {

        counter--;
        validatePromptSteps.querySelector('h2').textContent = counter;
        if(counter === 0) {
          clearInterval(myFunc);
          this.form.classList.remove('show');
          forgotWrapper.querySelector('.step3').classList.add('show');
          setTimeout(() => validatePromptSteps.classList.remove('show'), 200);
        }

      }, 1000);


      // this.forgotStep2Result(container)

    } else {

      validatePromptSteps.classList.add('show');

      let counter = parseInt(validatePromptSteps.querySelector('h2').textContent);

      let myFunc = setInterval(() => {

        counter--;
        validatePromptSteps.querySelector('h2').textContent = counter;
        if(counter === 0) {
          clearInterval(myFunc);
          validatePromptSteps.querySelector('button').classList.add('show');
          validatePromptSteps.querySelectorAll('p').forEach(data => data.classList.add('show'));
        }

      }, 1000);

    }

  }

  forgotStep3Validate () {

    if(this.form['fpassword'].value.length === 0) {

      this.form['fpassword'].classList.remove('orange');
      this.form['fpassword'].classList.remove('green');
      this.form['fpassword'].classList.add('red');
      const isRequired = new PopUps('Password', this.form.querySelector('small'));
      isRequired.isRequired();
      this.form.querySelector('small').classList.add('show');

    } else {

      if(this.form['fpassword'].value === this.form['cfpassword'].value) {

        this.form['fpassword'].classList.remove('orange');
        this.form['fpassword'].classList.remove('red');
        this.form['fpassword'].classList.add('green');
        this.form['cfpassword'].classList.remove('orange');
        this.form['cfpassword'].classList.remove('red');
        this.form['cfpassword'].classList.add('green');
        this.form.querySelector('small').classList.remove('show');

      } else {

        this.form['fpassword'].classList.remove('orange');
        this.form['fpassword'].classList.remove('green');
        this.form['fpassword'].classList.add('red');
        this.form['cfpassword'].classList.remove('orange');
        this.form['cfpassword'].classList.remove('green');
        this.form['cfpassword'].classList.add('red');
        const isWrongPassword = new PopUps('Password', this.form.querySelector('small'));
        isWrongPassword.isWrongPassword();
        this.form.querySelector('small').classList.add('show');

      }

    }

    if(this.form['fpassword'].classList.contains('green') && this.form['cfpassword'].classList.contains('green')) {

      this.forgotStep3Success();

    }

  }

  forgotStep1Success (value) {

    if(this.form['value'].classList.contains('green')) {

      forgotWrapper.querySelector('.step2 ul').innerHTML = `<li>Kindly include the additional information associated to the " ${value} " you provided</li>`;

      this.form.classList.remove('show');
      forgotWrapper.querySelector('.step2').classList.add('show');

    }

  }

  forgotStep2Result (value) {

    if(value === container) {

      validatePromptSteps.classList.add('show');

    }

  }

  forgotStep3Success () {

    localStorage.removeItem('accounts');

    _accounts = _accounts.filter ( data => data.email !== container[0].email);

    container[0].password = this.form['fpassword'].value;

    const newPass = new Save;
    newPass.signUp(
      container[0].profile_picture,
      container[0].firstname,
      container[0].middlename,
      container[0].lastname,
      container[0].number,
      container[0].email,
      container[0].address,
      container[0].password
    )

    setTimeout(() => location.href = '', 200);

  }
  
  editAccountValidate () {

    if(userPanel.querySelector('.edit-account .nnumber').value.length < 6) {

      userPanel.querySelector('.edit-account .nnumber').classList.remove('orange');
      userPanel.querySelector('.edit-account .nnumber').classList.remove('green');
      userPanel.querySelector('.edit-account .nnumber').classList.add('red');
      const isInvalid = new PopUps(
        userPanel.querySelector('.edit-account .nnumber').name.replace(userPanel.querySelector('.edit-account .nnumber').name.at(0), userPanel.querySelector('.edit-account .nnumber').name.at(0).toUpperCase()),
        userPanel.querySelector('.edit-account .nnumber').parentElement.querySelector('small'));
      isInvalid.isInvalid();

    } else {

      _accounts.filter(data => data.email !== online[0].email).filter(data => data.number === userPanel.querySelector('.edit-account .nnumber').value).length > 0 ? isAlreadyTakenFunction(userPanel.querySelector('.edit-account .nnumber')) : 
      userPanel.querySelector('.edit-account .nnumber').classList.remove('red') ||
      userPanel.querySelector('.edit-account .nnumber').classList.remove('orange') ||
      userPanel.querySelector('.edit-account .nnumber').classList.add('green') ||
      userPanel.querySelector('.edit-account .nnumber').parentElement.querySelector('small').classList.remove('show');

    }
    
    if(userPanel.querySelector('.edit-account .nemail').value.length < 11) {

      userPanel.querySelector('.edit-account .nemail').classList.remove('orange');
      userPanel.querySelector('.edit-account .nemail').classList.remove('green');
      userPanel.querySelector('.edit-account .nemail').classList.add('red');
      const isInvalid = new PopUps(
        userPanel.querySelector('.edit-account .nemail').name.replace(userPanel.querySelector('.edit-account .nemail').name.at(0), userPanel.querySelector('.edit-account .nemail').name.at(0).toUpperCase()),
        userPanel.querySelector('.edit-account .nemail').parentElement.querySelector('small'));
      isInvalid.isInvalid();

    } else {

      if(mailExtentions.filter(data => data === userPanel.querySelector('.edit-account .nemail').value.toLowerCase().slice(-10)).length > 0) {

        _accounts.filter(data => data.email !== online[0].email).filter(data => data.email === userPanel.querySelector('.edit-account .nemail').value.toLowerCase()).length > 0 ? isAlreadyTakenFunction(userPanel.querySelector('.edit-account .nemail')) : 
        userPanel.querySelector('.edit-account .nemail').classList.remove('red') ||
        userPanel.querySelector('.edit-account .nemail').classList.remove('orange') ||
        userPanel.querySelector('.edit-account .nemail').classList.add('green') ||
        userPanel.querySelector('.edit-account .nemail').parentElement.querySelector('small').classList.remove('show');

      } else {

        userPanel.querySelector('.edit-account .nemail').classList.remove('orange');
        userPanel.querySelector('.edit-account .nemail').classList.remove('green');
        userPanel.querySelector('.edit-account .nemail').classList.add('red');
        const isInvalid = new PopUps(
          userPanel.querySelector('.edit-account .nemail').name.replace(userPanel.querySelector('.edit-account .nemail').name.at(0), userPanel.querySelector('.edit-account .nemail').name.at(0).toUpperCase()),
          userPanel.querySelector('.edit-account .nemail').parentElement.querySelector('small'));
        isInvalid.isInvalid();

      }

    }

    if(userPanel.querySelector('.edit-account .password').value.length === 0) {

      userPanel.querySelector('.edit-account .password').classList.remove('orange');
      userPanel.querySelector('.edit-account .password').classList.remove('green');
      userPanel.querySelector('.edit-account .password').classList.add('red');
      const isRequired = new PopUps(
        userPanel.querySelector('.edit-account .password').name.replace(userPanel.querySelector('.edit-account .password').name.at(0), userPanel.querySelector('.edit-account .password').name.at(0).toUpperCase()),
        userPanel.querySelector('.edit-account .password').parentElement.parentElement.querySelector('small'));
      isRequired.isRequired();

    } else {

      if(userPanel.querySelector('.edit-account .password').value !== userPanel.querySelector('.edit-account .ncpassword').value) {

        userPanel.querySelector('.edit-account .password').classList.remove('red');
        userPanel.querySelector('.edit-account .password').classList.remove('green');
        userPanel.querySelector('.edit-account .password').classList.add('orange');
        userPanel.querySelector('.edit-account .ncpassword').classList.add('orange');
        const isNotMatch = new PopUps(
          userPanel.querySelector('.edit-account .password').name.replace(userPanel.querySelector('.edit-account .password').name.at(0), userPanel.querySelector('.edit-account .password').name.at(0).toUpperCase()),
          userPanel.querySelector('.edit-account .password').parentElement.parentElement.querySelector('small'));
        isNotMatch.isNotMatch();

      } else {

        _accounts = _accounts.filter(data => data.email !== online[0].email);

        userPanel.querySelector('.edit-account .password').classList.remove('orange');
        userPanel.querySelector('.edit-account .ncpassword').classList.remove('orange');
        userPanel.querySelector('.edit-account .password').classList.add('green');
        userPanel.querySelector('.edit-account .password').parentElement.parentElement.querySelector('small').classList.remove('show');

      }

    }

    if
    (
      userPanel.querySelector('.edit-account .nnumber').classList.contains('green') &&
      userPanel.querySelector('.edit-account .nemail').classList.contains('green') &&
      userPanel.querySelector('.edit-account .password').classList.contains('green')
    )
    {

      setTimeout(() => this.editAccountSuccess(), 200);

    }

  }

  editAccountSuccess () {
    
    let newInfoAccount = userPanel.querySelector('.profile-wrapper');
    localStorage.removeItem('online');

    online[0].firstname = userPanel.querySelector('.nfirstname').value.toLowerCase();
    online[0].middlename = userPanel.querySelector('.nmiddlename').value.toLowerCase();
    online[0].lastname = userPanel.querySelector('.nlastname').value.toLowerCase();
    online[0].number = userPanel.querySelector('.nnumber').value;
    online[0].email = userPanel.querySelector('.nemail').value.toLowerCase();
    online[0].address = userPanel.querySelector('.edit-account .address').value.toLowerCase();
    online[0].password = userPanel.querySelector('.password').value;
    
    newInfoAccount.querySelector('img').src = online[0].profile_picture;
    newInfoAccount.querySelector('h2 .firstname').textContent = online[0].firstname;
    newInfoAccount.querySelector('h2 .middlename').textContent = online[0].middlename;
    newInfoAccount.querySelector('h2 .lastname').textContent = online[0].lastname;
    newInfoAccount.parentElement.querySelector('table .number').textContent = online[0].number;
    newInfoAccount.parentElement.querySelector('table .email').textContent = online[0].email;
    newInfoAccount.parentElement.querySelector('table .address').textContent = online[0].address;

    userPanel.querySelector('.edit-account').classList.remove('show');

    localStorage.setItem('online', JSON.stringify(online));

    localStorage.removeItem('accounts');


    const newInfo = new Save;
    newInfo.signUp(
      online[0].profile_picture,
      online[0].firstname,
      online[0].middlename,
      online[0].lastname,
      online[0].number,
      online[0].email,
      online[0].address,
      online[0].password
    )
    
    const editAccountDefault = new ToDefault(userPanel.querySelector('.edit-account'));
    editAccountDefault.defaultEditAccount();

  }

  sendingDataValidation = function() {

    if
    (
      this.form['firstname'].classList.contains('green') &&
      this.form['lastname'].classList.contains('green') &&
      this.form['number'].classList.contains('green') &&
      this.form['email'].classList.contains('green') &&
      this.form['password'].classList.contains('green') &&
      this.form['confirmpassword'].classList.contains('green')
    )
    {
      
      promptWrapper.classList.add('show');

      const values = this.signUp(
        Save.profile_picture,
        this.form['firstname'].value.toLowerCase(),
        Save.middlename.toLowerCase(),
        this.form['lastname'].value.toLowerCase(),
        this.form['number'].value,
        this.form['email'].value.toLowerCase(),
        Save.address.toLowerCase(),
        this.form['password'].value
      )

    }

  }

  login = function() {

    this.form['email'].classList.remove('red');
    this.form['password'].classList.remove('red');
    this.form['email'].classList.add('green');
    this.form['password'].classList.add('green');

  }

  signUp = function(profile_picture, firstname, middlename, lastname, number, email, address, password) {

    _accounts.push({profile_picture, firstname, middlename, lastname, number, email, address, password})
  
    localStorage.setItem('accounts', JSON.stringify(_accounts));
  
    return {profile_picture, firstname, middlename, lastname, number, email, address, password};
  
  }

}

class Open_Dashboard extends Switch {

  constructor(value) {
    super(value);
  }

  elementValidate () {

    switch(this.form === this.form) {
  
      case this.form.classList.contains('loginForm') :
  
        loginForm.parentElement.classList.remove('show');
        const defaultLog = new ToDefault(loginForm);
        defaultLog.defaultLogin();

        this.openUserDashboard();
  
          break;
  
      case this.form.classList.contains('.edit-account') :

        this.openUserDashboard();
  
          break;
  
      default: console.log('This is the openUserDashboard');
  
          break;
  
    }

  }

  openUserDashboard () {

    userPanel.classList.add('show');
    document.title = 'User Dashboard Page';
  
    let dashboard_profile = userPanel.querySelector('.profile-wrapper');
    
    dashboard_profile.querySelector('img').src = online[0].profile_picture;
    dashboard_profile.querySelector('h2 .firstname').textContent = online[0].firstname;
    dashboard_profile.querySelector('h2 .middlename').textContent = online[0].middlename;
    dashboard_profile.querySelector('h2 .lastname').textContent = online[0].lastname;
    dashboard_profile.parentElement.querySelector('table .number').textContent = online[0].number;
    dashboard_profile.parentElement.querySelector('table .email').textContent = online[0].email;
    dashboard_profile.parentElement.querySelector('table .address').textContent = online[0].address;

  }

}

// Arrow Function
closePromptWrapper.onclick = e => {

  e.target.parentElement.parentElement.classList.remove('show');
  signUpForm.parentElement.classList.remove('show');
  
  const form = new Switch(signUpForm);
  form.open();

  signUpForm['firstname'].value = '';
  signUpForm['lastname'].value = '';
  signUpForm['number'].value = '';
  signUpForm['email'].value = '';
  signUpForm['password'].value = '';
  signUpForm['confirmpassword'].value = '';

  document.querySelector('.account-datas').innerHTML = accountsData(_accounts);

  accountsWrapper.querySelector('.account-datas').style.display = 'flex';

  accountsWrapper.querySelector('h2 span').textContent = 'List Of Accounts';

  accountsIndicatorNumber.style.display = 'block';

  setTimeout(() => accountsDataFunc(), 100);

}

switchAccountsOption.forEach(button => {

  button.onclick = e => {

    e.currentTarget.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100);

    e.target.parentElement.parentElement.classList.remove('show');
    
    const form = new Switch(e.target.parentElement);
    form.open();

  }

})

passwordEye.forEach(button => {

  button.onclick = e => {

    
    form = e.srcElement.form;
    
    if(form === null) {
      
      if(e.target.parentElement.parentElement.parentElement.parentElement.classList.contains('edit-account')) {
        
        const eyeChecker = new Toggle_Password(userPanel.querySelector('.edit-account'));
        eyeChecker.eyeChecker();

      }
      
    } else {
      
      const eyeChecker = new Toggle_Password(form);
      eyeChecker.eyeChecker();

    }

  }

})

signUpButton.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    const signUp = new Save(signUpForm);
    signUp.formValidate();

  }, 250);

}

loginButton.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);
  
  setTimeout(() => {
    
    const login = new Save(loginForm);
    login.formValidate();

  }, 250);

}

accountsButton.onclick = e => {

  e.currentTarget.classList.add('clicked');
  setTimeout(() => accountsButton.classList.remove('clicked'), 100);

  setTimeout(() => {

    accountsWrapper.classList.add('show');

    setTimeout(() => accountsWrapper.querySelectorAll('.account-datas button').forEach(data => data.classList.add('show')), 150);

  }, 200);

}

accountsCloseButton.onclick = e => {

  accountsWrapper.classList.remove('show');
  accountsWrapper.querySelectorAll('.account-datas button').forEach(data => data.classList.remove('show'));

}

colorButton.onclick = e => {

  if(colorWrapper.classList.toggle('dark')) {

    darkModeOn();

  } else {

    darkModeOff();

  }

  if(colorWrapper.classList.contains('dark')) {

    darkModeStatus = 'dark';

    localStorage.setItem('darkModeStatus', JSON.stringify(darkModeStatus));
    
  } else {

    darkModeStatus = 'white';

    localStorage.setItem('darkModeStatus', JSON.stringify(darkModeStatus));

  }
  
}

forgotPasswordButton.onclick = e => {

  loginForm.parentElement.classList.remove('show');
  forgotWrapper.classList.add('show');

  const _toDefault = new ToDefault(loginForm);
  _toDefault.defaultLogin();

}

proceedStep1Button.onclick = e => {

  e.currentTarget.classList.add('clicked');
  setTimeout(() => proceedStep1Button.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    const toValidate = new Save(e.srcElement.form);
    toValidate.formValidate();

  }, 250);

  // _accounts.filter(data => data.email === proceedStep1Values.value || data.number === proceedStep1Values.value).length > 0 ?

}

proceedStep2Button.onclick = e => {

  e.currentTarget.classList.add('clicked');
  setTimeout(() => proceedStep2Button.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    const toValidate = new Save(e.srcElement.form);
    toValidate.formValidate();

  }, 250);

}

backStep1Button.onclick = e => {

  e.currentTarget.classList.add('clicked');
  setTimeout(() => backStep1Button.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    e.srcElement.form.parentElement.classList.remove('show');
    loginForm.parentElement.classList.add('show');
    proceedStep1Values.value = '';
    proceedStep1Values.classList.remove('orange');
    proceedStep1Values.classList.remove('green');
    proceedStep1Values.classList.remove('red');
    proceedStep1Values.parentElement.querySelector('small').classList.remove('show');

  }, 250);

}

backStep2Button.onclick = e => {

  e.currentTarget.classList.add('clicked');
  setTimeout(() => backStep1Button.classList.remove('clicked'), 100);

  proceedStep1Values.value = '';
  proceedStep1Values.classList.remove('orange');
  proceedStep1Values.classList.remove('green');
  proceedStep1Values.classList.remove('red');
  proceedStep1Values.parentElement.querySelector('small').classList.remove('show');
  
  setTimeout(() => {

    e.srcElement.form.classList.remove('show');
    forgotWrapper.querySelector('.step1').classList.add('show');

  }, 250);

}

submitStep3Button.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => submitStep3Button.classList.remove('clicked'), 100);

  setTimeout(() => {

    const forgotpassword = new Save(e.srcElement.form);
    forgotpassword.formValidate();

  }, 250);

}

cancelStep3Button.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => cancelStep3Button.classList.remove('clicked'), 100);

  setTimeout(() => location.href = '', 250);

}

validatePromptSteps.querySelector('button').onclick = e => {
  
  setTimeout(() => location.href = '', 200);

}

logoutButton.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    localStorage.removeItem('online');
    online = online.filter(data => data === '');
    userPanel.classList.remove('show');
    document.querySelector('.account-datas').innerHTML = accountsData(_accounts);
    setTimeout(() => accountsDataFunc(), 100);
    loginForm.parentElement.classList.add('show');
    
  }, 300);

}

editAccountButton.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    let new_info = userPanel.querySelector('.edit-account');
    
    new_info.querySelector('.nfirstname').value = online[0].firstname;
    new_info.querySelector('.nmiddlename').value = online[0].middlename;
    new_info.querySelector('.nlastname').value = online[0].lastname;
    new_info.querySelector('.nnumber').value = online[0].number;
    new_info.querySelector('.nemail').value = online[0].email;
    new_info.querySelector('.address').value = online[0].address;
    new_info.querySelector('.password').value = online[0].password;
    
    editAccountButton.parentElement.parentElement.querySelector('.edit-account').classList.add('show');

  }, 200);

}

editAccountSave.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    const editAccount = new Save(userPanel.querySelector('.edit-account'));
    editAccount.formValidate();

  }, 250);

}

editAccountCancel.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);
  
  setTimeout(() => {

    editAccountButton.parentElement.parentElement.querySelector('.edit-account').classList.remove('show');

  }, 250);

}

deleteAccountButton.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);

  setTimeout(() => deletePrompt.classList.add('show'), 200);

}

confirmDeleteAccount.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);

  setTimeout(() => {
    
    localStorage.removeItem('online');

    _accounts = _accounts.filter(data => data.email !== online[0].email);

    online = online.filter(data => data === _accounts);

    localStorage.setItem('accounts', JSON.stringify(_accounts));

    deletePrompt.classList.remove('show');

    document.querySelector('.account-datas').innerHTML = accountsData(_accounts);
    setTimeout(() => accountsDataFunc(), 100);

    const backTologin = new Switch(loginForm);
    backTologin.loginFormFunc();

  }, 200);

}

cancelDeleteAccount.onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => e.target.classList.remove('clicked'), 100);

  setTimeout(() => deletePrompt.classList.remove('show'), 200);

}

// Keypress
signUpForm.querySelectorAll('input').forEach(el => {

  el.onkeydown = e => {

    if(e.key === 'Enter') {

      const signUp = new Save(signUpForm);
      signUp.formValidate();

    }

  }

})

loginForm.querySelectorAll('input').forEach(el => {

  el.onkeydown = e => {

    if(e.key === 'Enter') {

      const login = new Save(loginForm);
      login.formValidate();

    }

  }

})

forgotWrapper.querySelectorAll('.steps input').forEach(el => {

  el.onkeydown = e => {

    if(e.key === 'Enter') {

      const steps = new Save(e.srcElement.form);
      steps.formValidate();

    }

  }

})

forgotWrapper.querySelectorAll('.steps').forEach(el => {

  el.onsubmit = e => {

    e.preventDefault();

  }

})

userPanel.querySelectorAll('.edit-account ul li input').forEach(el => {

  el.onkeydown = e => {

    if(e.key === 'Enter') {

      const editAccount = new Save(userPanel.querySelector('.edit-account'));
      editAccount.formValidate();

    }

  }

})

nameKeys = [signUpForm['firstname'], signUpForm['lastname'], userPanel.querySelector('.edit-account .nmiddlename'), userPanel.querySelector('.edit-account .nfirstname'), userPanel.querySelector('.edit-account .nlastname')].forEach(input => {
  
  input.onkeypress = e => {
  
    arr = ['1','2','3','4','5','6','7','8','9','0','-', '_', '`', '~', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '"',"'", ',', '<','.','>','/','?'];
  
    if(arr.includes(e.key)) {
  
      e.preventDefault();
  
    }
  
  }

})

numberKeys = [signUpForm['number'], userPanel.querySelector('.edit-account .nnumber')].forEach(input => {
  
  input.onkeypress = e => {
  
    arr = ['e','-', '_', '`', '~', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '"',"'", ',', '<','.','>','/','?'];
  
    if(arr.includes(e.key)) {
  
      e.preventDefault();
  
    }
  
  }

})

// onchange
profile.onchange = e => {

  const reader = new FileReader();

  reader.onload = e => {

    _accounts = _accounts.filter(data => data.email !== online[0].email);

    const account = new Save;
    account.signUp(
      reader.result,
      online[0].firstname,
      online[0].middlename,
      online[0].lastname,
      online[0].number,
      online[0].email,
      online[0].address,
      online[0].password
    )

    profile.parentElement.querySelector('img').src = reader.result;
    
    online[0].profile_picture = reader.result;

    localStorage.setItem('online', JSON.stringify(online));

  }

  reader.readAsDataURL(profile.files[0]);

}