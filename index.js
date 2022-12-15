const signForm = document.querySelector('.sign');
const loginForm = document.querySelector('.login');
const vform = document.querySelector('.step1');
const vform2 = document.querySelector('.step2');
const vform3 = document.querySelector('.step3');
var eyes = document.querySelectorAll('.password-eye');
var shows = document.querySelectorAll('.check-style');
var inputs = document.querySelectorAll('input');
var bgOpas = document.querySelectorAll('.person-wrapper, .account-modal, .account-body, .vloading, .delete-promt');
var glows = document.querySelectorAll('form, .person-wrapper, .account-modal, input, .userpanel, .sbtn, .lbtn, .logout, .edit-account, .delete-account, .save, .cancel, .confirm-delete, .cancel-delete, .proceed, .proceed2, .back, .back2, .submit, .fcancel, .vloading, .vc, .account-body');
var btnGlows = document.querySelectorAll('.sbtn, .lbtn, .logout, .edit-account, .delete-account, .save, .cancel, .confirm-delete, .cancel-delete, .proceed, .proceed2, .back, .back2, .submit, .fcancel, .vc');
var
  sfirstname = signForm['firstname'],
  slastname = signForm['lastname'],
  snumber = signForm['number'],
  semail = signForm['email'],
  spassword = signForm['password'],
  scpassword = signForm['confirmpassword'];
var
  lemail = loginForm['email'],
  lpassword = loginForm['password'];
var
  value = vform['value'],
  fname = vform2['fname'],
  lname = vform2['lname'],
  fpassword = vform3['fpassword'],
  cfpassword = vform3['cfpassword'];

let timeInterval = null;

var existed = [];

var theme = JSON.parse(localStorage.getItem('theme')) || [];

var num = JSON.parse(localStorage.getItem('num')) || [];

var accountsPanel = JSON.parse(localStorage.getItem('accounts')) || JSON.parse(localStorage.getItem('num')) || [];

var letters = /^[a-zA-Z ]{0,15}$/;

const numbers = /^[0]\d{10}$/;

const email = /^[a-zA-Z0-9 ._]{1,25}(?:@gmail|@yahoo)(?:.com)$/;

const ps = /^[A-Z][\w./`~@?><=+-]{7,20}$/;

const names = [
  {
    name: "abb"
  }, {
    name: "abe"
  }, {
    name: "ace"
  }, {
    name: "acy"
  }, {
    name: "ada"
  }, {
    name: "add"
  }, {
    name: "alf"
  }, {
    name: "ali"
  }, {
    name: "amy"
  }, {
    name: "ann"
  }, {
    name: "ari"
  }, {
    name: "art"
  }, {
    name: "asa"
  }, {
    name: "avi"
  }, {
    name: "axl"
  }, {
    name: "bee"
  }, {
    name: "ben"
  }, {
    name: "bon"
  }, {
    name: "bud"
  }, {
    name: "cal"
  }, {
    name: "cam"
  }, {
    name: "cap"
  }, {
    name: "cas"
  }, {
    name: "che"
  }, {
    name: "cha"
  }, {
    name: "con"
  }, {
    name: "coy"
  }, {
    name: "dan"
  }, {
    name: "dax"
  }, {
    name: "dee"
  }, {
    name: "del"
  }, {
    name: "doc"
  }, {
    name: "don"
  }, {
    name: "dow"
  }, {
    name: "ean"
  }, {
    name: "ebb"
  }, {
    name: "edd"
  }, {
    name: "edw"
  }, {
    name: "eli"
  }, {
    name: "ell"
  }, {
    name: "ely"
  }, {
    name: "eva"
  }, {
    name: "fay"
  }, {
    name: "fed"
  }, {
    name: "fox"
  }, {
    name: "foy"
  }, {
    name: "gay"
  }, {
    name: "gee"
  }, {
    name: "geo"
  }, {
    name: "gil"
  }, {
    name: "gus"
  }, {
    name: "guy"
  }, {
    name: "hal"
  }, {
    name: "ham"
  }, {
    name: "han"
  }, {
    name: "ian"
  }, {
    name: "ida"
  }, {
    name: "ike"
  }, {
    name: "ira"
  }, {
    name: "iri"
  }, {
    name: "iva"
  }, {
    name: "ivy"
  }, {
    name: "jad"
  }, {
    name: "jan"
  }, {
    name: "jax"
  }, {
    name: "jay"
  }, {
    name: "jeb"
  }, {
    name: "jed"
  }, {
    name: "jep"
  }, {
    name: "jim"
  }, {
    name: "job"
  }, {
    name: "joe"
  }, {
    name: "jon"
  }, {
    name: "joy"
  }, {
    name: "kai"
  }, {
    name: "kay"
  }, {
    name: "kem"
  }, {
    name: "ken"
  }, {
    name: "kim"
  }, {
    name: "kip"
  }, {
    name: "kit"
  }, {
    name: "koa"
  }, {
    name: "kye"
  }, {
    name: "lea"
  }, {
    name: "lee"
  }, {
    name: "lem"
  }, {
    name: "len"
  }, {
    name: "leo"
  }, {
    name: "les"
  }, {
    name: "lew"
  }, {
    name: "lex"
  }, {
    name: "lim"
  }, {
    name: "lon"
  }, {
    name: "lou"
  }, {
    name: "loy"
  }, {
    name: "luc"
  }, {
    name: "lue"
  }, {
    name: "lum"
  }, {
    name: "lyn"
  }, {
    name: "mac"
  }, {
    name: "mae"
  }, {
    name: "mal"
  }, {
    name: "mat"
  }, {
    name: "max"
  }, {
    name: "may"
  }, {
    name: "mel"
  }, {
    name: "moe"
  }, {
    name: "nat"
  }, {
    name: "ned"
  }, {
    name: "nim"
  }, {
    name: "noe"
  }, {
    name: "obe"
  }, {
    name: "oda"
  }, {
    name: "ola"
  }, {
    name: "ole"
  }, {
    name: "ora"
  }, {
    name: "ott"
  }, {
    name: "ova"
  }, {
    name: "pat"
  }, {
    name: "pia"
  }, {
    name: "pot"
  }, {
    name: "rae"
  }, {
    name: "ras"
  }, {
    name: "ray"
  }, {
    name: "red"
  }, {
    name: "rex"
  }, {
    name: "rey"
  }, {
    name: "rob"
  }, {
    name: "rod"
  }, {
    name: "roe"
  }, {
    name: "ron"
  }, {
    name: "roy"
  }, {
    name: "sal"
  }, {
    name: "sam"
  }, {
    name: "sid"
  }, {
    name: "sie"
  }, {
    name: "sim"
  }, {
    name: "sim"
  }, {
    name: "sol"
  }, {
    name: "son"
  }, {
    name: "tab"
  }, {
    name: "tad"
  }, {
    name: "taj"
  }, {
    name: "tal"
  }, {
    name: "ted"
  }, {
    name: "tex"
  }, {
    name: "tim"
  }, {
    name: "tod"
  }, {
    name: "tom"
  }, {
    name: "toy"
  }, {
    name: "tre"
  }, {
    name: "tru"
  }, {
    name: "tye"
  }, {
    name: "val"
  }, {
    name: "van"
  }, {
    name: "vic"
  }, {
    name: "von"
  }, {
    name: "wes"
  }, {
    name: "yee"
  }, {
    name: "zeb"
  }, {
    name: "zed"
  }, {
    name: "zev"
  }
];

const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", ",", "<", ".", ">", "/", "?", ";", ":", "'", "[", "]", "{", "}", "|", '"', "\\"];

var users = JSON.parse(localStorage.getItem('user')) || [];

var registeredNumber = [];

var userOnline = JSON.parse(localStorage.getItem('online')) || [];

const addNewUser = (Firstname, Middlename, Lastname, Contact_Number, Email, Address, Password) => {
  users.push({
    Firstname,
    Middlename,
    Lastname,
    Contact_Number,
    Email,
    Address,
    Password
  });

  localStorage.setItem('user', JSON.stringify(users));

  return {
    Firstname,
    Middlename,
    Lastname,
    Contact_Number,
    Email,
    Address,
    Password
  };
}

const accountAnim = () => {
  document.querySelector('.account-modal').classList.add('x');
  document.querySelector('.account-modal').addEventListener('animationend', vanished);

  function vanished() {

    document.querySelector('.person-wrapper').disabled = false;
    document.querySelector('.no').disabled = false;
    lemail.disabled = false;
    lpassword.disabled = false;
    document.querySelector('.lbtn').disabled = false;

    lemail.value = acc.firstElementChild.nextElementSibling.innerText;

    document.querySelector('.account-modal').classList.remove('c');
    document.querySelector('.account-modal').classList.remove('x');
    document.querySelector('.account-modal').removeEventListener('animationend', vanished);
  }
}
const accountAnim2 = () => {
  document.querySelector('.account-modal').classList.add('x');
  document.querySelector('.account-modal').addEventListener('animationend', vanished);

  function vanished() {

    document.querySelector('.person-wrapper').disabled = false;
    document.querySelector('.no').disabled = false;
    lemail.disabled = false;
    lpassword.disabled = false;
    document.querySelector('.lbtn').disabled = false;

    document.querySelector('.account-modal').classList.remove('c');
    document.querySelector('.account-modal').classList.remove('x');
    document.querySelector('.account-modal').removeEventListener('animationend', vanished);
  }
}

const checker = () => {
  if (document.querySelector('.account-modal').firstElementChild.nextElementSibling.childElementCount === 0) {
    document.querySelector('.account-modal').firstElementChild.firstElementChild.innerText = " No Accounts ";
    document.querySelector('.account-modal').firstElementChild.classList.add('padding');
    document.querySelector('.account-modal').firstElementChild.firstElementChild.classList.add('margin');

  } else {
    document.querySelector('.account-modal').firstElementChild.firstElementChild.innerText = " Accounts ";
    document.querySelector('.account-modal').firstElementChild.classList.remove('padding');
    document.querySelector('.account-modal').firstElementChild.firstElementChild.classList.remove('margin');
  }
}

const newAccounts = (Firstname, Email) => {
  accountsPanel.push({
    Firstname,
    Email
  });

  localStorage.setItem('accounts', JSON.stringify(accountsPanel));

  return {
    Firstname,
    Email
  };
}

const createElements = ({
  Firstname,
  Email
}) => {
  const accbody = document.createElement('button');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  accbody.classList.add('account-body');
  h3.innerText = Firstname;
  p.innerText = Email;
  accbody.append(h3, p);
  document.querySelector('.account-container').appendChild(accbody);

  const accounts = document.querySelectorAll('.account-body');

  for (account of accounts) {
    account.onclick = e => {
      acc = e.currentTarget;
      acc.classList.add('clicked');
      setTimeout(() => acc.classList.remove('clicked'), 50);

      setTimeout(() => accountAnim(), 200);
    }
  }
}

accountsPanel.forEach(createElements);
document.querySelector('.num').innerText = num;
accountsPanel.length === 0 ? document.querySelector('.num').style.display = "none" : document.querySelector('.num').style.display = "block";

if (theme.length > 0) { // To persist
  
  document.querySelector('.m').classList.add(theme[0]);
  document.querySelector('.color-wrapper').classList.add(theme[2], theme[5]);
  document.querySelector('.color-wrapper').classList.remove(theme[1]);
  document.querySelector('body').classList.add(theme[3]);
  document.querySelector('.edit-modal').classList.add(theme[3]);
  document.querySelector('.no').classList.add(theme[4]);
  document.querySelector('.ao').classList.add(theme[4]);
  document.querySelector('.ca').classList.add(theme[4]);
  document.querySelector('.forgot').classList.add(theme[4]);

  //
  //To remove theme1
  for(eye of eyes) {
    eye.classList.add(theme[8]);
    eye.classList.remove(theme[1]);
  }
  for(each of shows) {
    each.classList.add(theme[1]);
    each.classList.remove(theme[3]);
  }
  for (input of inputs) {
    input.classList.remove(theme[1]);
  }
  bgOpas.forEach(bgo => {
    bgo.classList.remove(theme[1]);
  })
  btnGlows.forEach(btnG => {
    btnG.classList.remove(theme[1]);
  })
  glows.forEach(glow => {
    glow.classList.remove(theme[1]);
  })
  for (input of inputs) {
    input.classList.add(theme[3]);
  }
  bgOpas.forEach(bgo => {
    bgo.classList.add(theme[7]);
  })
  btnGlows.forEach(btnG => {
    btnG.classList.add(theme[6]);
  })
  glows.forEach(glow => {
    glow.classList.add(theme[5]);
  })
} else {}

document.querySelector('.m').onclick = e => {
  // Fix #1 something here.
  var color = "color";
  var trans = "colorsTrans";
  var bgB = "bgB";
  var bodyB = "bodyB";
  var textC = "textC";
  var glowS = "glow";
  var bGlows = "btn-glow";
  var bgO = "bgo";
  var eyeB = "eyeB";
  document.querySelector('.m').classList.toggle('color');
  const btnTrans = () => {
    theme.length === 0 ? document.querySelector('.m').classList.remove(trans) : "";
  }


  if (document.querySelector('.m').classList.contains('color')) {
    theme.push(color, trans, bgB, bodyB, textC, glowS, bGlows, bgO, eyeB);
    localStorage.setItem('theme', JSON.stringify(theme));
    //
    document.querySelector('.m').classList.add(trans);
    document.querySelector('.color-wrapper').classList.add(theme[1], theme[2], theme[5]);
    document.querySelector('body').classList.add(theme[1], theme[3]);
    document.querySelector('.edit-modal').classList.add(theme[1], theme[3]);
    document.querySelector('.no').classList.add(theme[1], theme[4]);
    document.querySelector('.ao').classList.add(theme[1], theme[4]);
    document.querySelector('.ca').classList.add(theme[1], theme[4]);
    document.querySelector('.forgot').classList.add(theme[1], theme[4]);


    //

    for(eye of eyes) {
      eye.classList.add(theme[1], theme[8]);
    }
    for (each of shows) {
      each.classList.add(theme[1], theme[2]);
      each.classList.remove(theme[3]);
    }
    for (input of inputs) {
      input.classList.add(theme[1], theme[3]);
    }
    bgOpas.forEach(bgo => {
      bgo.classList.add(theme[1], theme[7]);
    })
    btnGlows.forEach(btnG => {
      btnG.classList.add(theme[1], theme[6]);
    })
    glows.forEach(glow => {
      glow.classList.add(theme[1], theme[5]);
    })

  } else {
    localStorage.removeItem('theme');
    document.querySelector('.m').classList.add(trans);
    document.querySelector('.color-wrapper').classList.remove(theme[2], theme[5]);
    document.querySelector('body').classList.remove(theme[3]);
    document.querySelector('.edit-modal').classList.remove(theme[3]);
    document.querySelector('.no').classList.remove(theme[4]);
    document.querySelector('.ao').classList.remove(theme[4]);
    document.querySelector('.ca').classList.remove(theme[4]);
    document.querySelector('.forgot').classList.remove(theme[4]);


    //
    for(eye of eyes) {
      eye.classList.remove(theme[8]);
    }
    for (each of shows) {
      each.classList.remove(theme[2]);
      each.classList.remove(theme[3]);
    }
    for (input of inputs) {
      input.classList.remove(theme[3]);
    }
    bgOpas.forEach(bgo => {
      bgo.classList.remove(theme[7]);
    })
    btnGlows.forEach(btnG => {
      btnG.classList.remove(theme[6]);
    })
    glows.forEach(glow => {
      glow.classList.remove(theme[5]);
    })

    theme = theme.filter(theme => theme === users);
    setTimeout(() => btnTrans(), 500);
  }

}

document.querySelector('.person-wrapper').onclick = e => {
  document.querySelector('.person-wrapper').classList.add('clicked');
  setTimeout(() => document.querySelector('.person-wrapper').classList.remove('clicked'), 50);

  document.querySelector('.account-modal').classList.add('c');

  if (document.querySelector('.account-modal').classList.contains('c')) {
    document.querySelector('.person-wrapper').disabled = true;
    document.querySelector('.no').disabled = true;
    lemail.disabled = true;
    lpassword.disabled = true;
    document.querySelector('.lbtn').disabled = true;
  } else {
    document.querySelector('.person-wrapper').disabled = false;
    document.querySelector('.no').disabled = false;
    lemail.disabled = false;
    lpassword.disabled = false;
    document.querySelector('.lbtn').disabled = false;
  }

  checker();
}

document.querySelector('.ca').onclick = e => {
  document.querySelector('.ca').classList.add('clicked');
  setTimeout(() => document.querySelector('.ca').classList.remove('clicked'), 50);

  setTimeout(() => accountAnim2(), 200);
}

eyes.forEach(eye => {
  eye.onclick = e => {
    e.target.classList.toggle('eye-opened');

    if (e.target.classList.contains('eye-opened')) {

      if (
        document.querySelector('.wrapper2').classList.contains('a') ||
        document.querySelector('.wrapper2').classList.contains('b') ||
        document.querySelector('.wrapper2').classList.contains('d')
      ) { //Login
        e.target.previousElementSibling.type = "text";
      } else if (
        document.querySelector('.wrapper1').classList.contains('a')
      ) { // Sign Up
        e.target.previousElementSibling.type = "text";
        e.target.parentElement.nextElementSibling.type = "text";
      } else if (document.querySelector('.edit-modal').classList.contains('aa')) {
        // Edit Account
        e.target.previousElementSibling.type = "text";
        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.type = "text";
      } else if (
        document.querySelector('.wrapper4').classList.contains('b') &&
        document.querySelector('.step3').classList.contains('b')
      ) { // Step 3 : New Password
        e.target.previousElementSibling.type = "text";
        e.target.parentElement.nextElementSibling.type = "text";

      } else {};

    } else {

      if (
        document.querySelector('.wrapper2').classList.contains('a') ||
        document.querySelector('.wrapper2').classList.contains('b') ||
        document.querySelector('.wrapper2').classList.contains('d')
      ) { //Login
        e.target.previousElementSibling.type = "password";
      } else if (
        document.querySelector('.wrapper1').classList.contains('a')
      ) { // Sign Up
        e.target.previousElementSibling.type = "password";
        e.target.parentElement.nextElementSibling.type = "password";
      } else if (document.querySelector('.edit-modal').classList.contains('aa')) {
        // Edit Account
        e.target.previousElementSibling.type = "password";
        e.target.parentElement.parentElement.nextElementSibling.firstElementChild.type = "password";
      } else if (
        document.querySelector('.wrapper4').classList.contains('b') &&
        document.querySelector('.step3').classList.contains('b')
      ) { // Step 3 : New Password
        e.target.previousElementSibling.type = "password";
        e.target.parentElement.nextElementSibling.type = "password";

      } else {};

    }
  }
})

const eyeClosed = () => {
  eyes.forEach(eyeC => {

    if (eyeC.classList.contains('eye-opened')) {

      if (
        document.querySelector('.wrapper2').classList.contains('a') ||
        document.querySelector('.wrapper2').classList.contains('b') ||
        document.querySelector('.wrapper2').classList.contains('d')
      ) { //Login
        eyeC.previousElementSibling.type = "password";
        
      } else if (
        document.querySelector('.wrapper1').classList.contains('a')
      ) { // Sign Up
        eyeC.previousElementSibling.type = "password";
        eyeC.parentElement.nextElementSibling.type = "password";
      } else if (document.querySelector('.edit-modal').classList.contains('aa')) {
        // Edit Account
        eyeC.previousElementSibling.type = "password";
        eyeC.parentElement.parentElement.nextElementSibling.firstElementChild.type = "password";
      } else if (
        document.querySelector('.wrapper4').classList.contains('b') &&
        document.querySelector('.step3').classList.contains('b')
      ) { // Step 3 : New Password
        eyeC.previousElementSibling.type = "password";
        eyeC.parentElement.nextElementSibling.type = "password";

      } else {};
      eyeC.classList.remove('eye-opened');
    } else {}

  })
}

var changer = () => {
  if (document.querySelector('.wrapper1').classList.contains('a') || document.querySelector('.wrapper1').classList.contains('b')) {
    document.title = " Sign Up ";
  } else if (document.querySelector('.wrapper2').classList.contains('b') || document.querySelector('.wrapper2').classList.contains('d') || document.querySelector('.wrapper2').classList.contains('a')) {
    document.title = " Login ";
  } else if (document.querySelector('.wrapper3').classList.contains('c') && !document.querySelector('.edit-modal').classList.contains('aa')) {
    document.title = " Userpanel ";
  } else if (document.querySelector('.wrapper3').classList.contains('c') && document.querySelector('.edit-modal').classList.contains('aa')) {
    document.title = " Userpanel : Edit Information ";
  } else if (document.querySelector('.wrapper4').classList.contains('b') && document.querySelector('.step1').classList.contains('d') || document.querySelector('.step1').classList.contains('b') || document.querySelector('.step1').classList.contains('a')) {
    document.title = " Forgot Password : Step 1 ";
  } else if (document.querySelector('.wrapper4').classList.contains('b') && document.querySelector('.step2').classList.contains('b')) {
    document.title = " Forgot Password : Step 2 ";
  } else if (document.querySelector('.wrapper4').classList.contains('b') && document.querySelector('.step3').classList.contains('b')) {
    document.title = " Forgot Password : Step 3 ";
  } else {};
}

const passwordChanged = () => {
  localStorage.removeItem('user');

  users.filter(user => {
    user.Email === x[0].Email === true ? user.Password = fpassword.value : "";
  })

  localStorage.setItem('user', JSON.stringify(users));

  x.pop();
  fpassword.value = "";
  cfpassword.value = "";
  fpassword.classList.remove('i');
  cfpassword.classList.remove('i');
  document.querySelector('.wrapper4').classList.add('x');
  document.querySelector('.wrapper4').addEventListener('animationend', vanished);

  function vanished() {
    eyeClosed();
    document.querySelector('.step3').classList.remove('b');
    document.querySelector('.wrapper2').classList.add('a');
    document.querySelector('.wrapper4').classList.remove('b');
    document.querySelector('.step1').classList.add('d');

    document.querySelector('.step3').firstElementChild.firstElementChild.innerText = " Create new password ";

    changer();

    document.querySelector('.wrapper4').classList.remove('x');
    document.querySelector('.submit').disabled = false;
    document.querySelector('.fcancel').disabled = false;
    document.querySelector('.wrapper4').removeEventListener('animationend', vanished);
  }
}

const count = e => {
  document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.innerText--
}

const timer = e => {
  if (document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.innerText === "0") {
    document.querySelector('.vc').style.display = "block";
    document.querySelector('.vloading').classList.add('vloading-w');
    document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block"
    document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block"
  } else {};
}

const step3 = () => {
  document.querySelector('.vloading').classList.add('x');
  document.querySelector('.vloading').addEventListener('animationend', vanished);

  function vanished() {
    document.querySelector('.step2').classList.remove('b');
    document.querySelector('.step3').classList.add('b');
    document.querySelector('.vloading').classList.remove('c');
    document.querySelector('.vloading').classList.remove('x');

    fname.classList.remove('r');
    lname.classList.remove('r');
    fname.value = "";
    lname.value = "";

    document.querySelector('h5').innerText = "5";
    document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
    document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

    document.querySelector('.vc').style.display = "none";

    countnumber = 5;

    changer();

    document.querySelector('.proceed2').disabled = false;
    document.querySelector('.back2').disabled = false;
    document.querySelector('.vloading').removeEventListener('animationend', vanished);
  }
}

document.querySelector('.ao').onclick = e => {
  e.preventDefault();
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.ao').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {
    eyeClosed();
    e.target.parentElement.parentElement.classList.add('x');
    document.querySelector('.wrapper1').addEventListener('animationend', vanished);

    function vanished() {
      document.querySelector('.wrapper1').classList.remove('a');
      document.querySelector('.wrapper2').classList.remove('a');
      document.querySelector('.wrapper2').classList.add('b');
      document.querySelector('.wrapper1').classList.remove('x');
      changer();
      document.querySelector('.wrapper1').removeEventListener('animationend', vanished);
    }
    sfirstname.value = "";
    slastname.value = "";
    snumber.value = "";
    semail.value = "";
    spassword.value = "";
    scpassword.value = "";
    sfirstname.classList.remove('i');
    sfirstname.classList.remove('r');
    slastname.classList.remove('i');
    slastname.classList.remove('r');
    snumber.classList.remove('i');
    snumber.classList.remove('r');
    snumber.classList.remove('o');
    semail.classList.remove('i');
    semail.classList.remove('r');
    semail.classList.remove('o');
    spassword.classList.remove('i');
    spassword.classList.remove('r');
    scpassword.classList.remove('i');
    scpassword.classList.remove('r');
  }
}

document.querySelector('.no').onclick = e => {
  e.preventDefault();
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.no').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {

    e.target.parentElement.parentElement.classList.add('x');
    document.querySelector('.wrapper2').addEventListener('animationend', vanished);

    function vanished() {

      lemail.value = "";
      lpassword.value = "";
      lemail.classList.remove('o');
      lemail.classList.remove('i');
      lemail.classList.remove('r');
      lpassword.classList.remove('i');
      lpassword.classList.remove('r');
      eyeClosed();
      document.querySelector('.wrapper2').classList.remove('b');
      document.querySelector('.wrapper1').classList.add('a');
      document.querySelector('.wrapper2').classList.remove('d');
      document.querySelector('.wrapper2').classList.remove('a');
      document.querySelector('.wrapper2').classList.remove('x');
      changer();
      document.querySelector('.wrapper2').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.cdialog').onclick = e => {
  e.preventDefault();
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.cdialog').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {
    e.target.parentElement.classList.add('x');
    document.querySelector('.wrapper1').classList.add('x');
    document.querySelector('.dialog').addEventListener('animationend', vanished);
    document.querySelector('.wrapper1').addEventListener('animationend', vanished);

    function vanished() {
      eyeClosed();
      document.querySelector('.dialog').classList.remove('c');
      document.querySelector('.dialog').classList.remove('x');
      document.querySelector('.wrapper1').classList.remove('a');
      document.querySelector('.wrapper2').classList.add('b');
      document.querySelector('.wrapper1').classList.remove('x');

      changer();

      if (document.querySelector('.dialog').classList.contains('c')) {
        document.querySelectorAll('input').forEach(ins => ins.disabled = true);
        document.querySelector('.sbtn').disabled = true;
        document.querySelector('.ao').disabled = true;
      } else {
        document.querySelectorAll('input').forEach(ins => ins.disabled = false);
        document.querySelector('.sbtn').disabled = false;
        document.querySelector('.ao').disabled = false;
      }
      document.querySelector('.dialog').removeEventListener('animationend', vanished);
      document.querySelector('.wrapper1').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.forgot').onclick = e => {
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.forgot').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {

    lemail.value = "";
    lpassword.value = "";
    lemail.classList.remove('r');
    lemail.classList.remove('i');
    lemail.classList.remove('o');
    lpassword.classList.remove('r');
    e.target.parentElement.parentElement.classList.add('x');
    document.querySelector('.wrapper2').addEventListener('animationend', vanished);

    function vanished() {
      eyeClosed();
      document.querySelector('.wrapper4').classList.add('b');
      document.querySelector('.wrapper2').classList.remove('x');
      document.querySelector('.wrapper2').classList.remove('b');
      document.querySelector('.wrapper2').classList.remove('a');
      document.querySelector('.wrapper2').classList.remove('d');
      changer();
      document.querySelector('.wrapper2').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.proceed').onclick = e => {
  e.preventDefault();

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.proceed').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {

    if (value.value.length === 0) {
      value.classList.add('r');
      alert('Email or mobile number is required');
    } else if (value.value.length > 0) {
      if (value.value.indexOf("0") === 0 && value.value.indexOf("9") === 1) {
        if (value.value.length < 12) {
          x = [];
          x = users.filter(user => user.Contact_Number === value.value);

          if (x.length > 0) {
            value.classList.add('i');
            value.classList.remove('r');
            value.classList.remove('o');
            document.querySelector('.step2').firstElementChild.firstElementChild.innerHTML = "Kindly include the additional information associated to the <b>Mobile Number</b> you provided";
          } else {
            if (value.value.match(numbers)) {
              alert('This contact number is not yet registered');
              value.classList.add('o');
              value.classList.remove('i');
              value.classList.remove('r');
            } else {
              alert('Contact number is invalid');
              value.classList.add('r');
              value.classList.remove('i');
              value.classList.remove('o');
            }
          }
        } else {
          alert('Contact number must be 11 digits only');
          value.classList.add('r');
          value.classList.remove('i');
          value.classList.remove('o');
        }
      } else if (value.value.includes('@' && 'g' && 'm' && 'a' && 'i' && 'l' && '.' && 'c' && 'o')) {
        if (value.value.length < 17) {
          alert('Email is too short');
          value.classList.add('r');
          value.classList.remove('i');
          value.classList.remove('o');
        } else if (value.value.length < 40) {
          x = [];
          x = users.filter(user => user.Email === value.value);

          if (x.length > 0) {
            value.classList.add('i');
            value.classList.remove('r');
            value.classList.remove('o');
            document.querySelector('.step2').firstElementChild.firstElementChild.innerHTML = "Kindly include the additional information associated to the <b>Email</b> you provided";
          } else {
            if (value.value.match(email)) {
              alert('This email is not yet registered');
              value.classList.add('o');
              value.classList.remove('i');
              value.classList.remove('r');
            } else {
              alert('Email is invalid');
              value.classList.add('r');
              value.classList.remove('i');
              value.classList.remove('o');
            }
          }
        } else {
          alert('Email is too long');
          value.classList.add('r');
          value.classList.remove('i');
          value.classList.remove('o');
        };
      } else {
        alert('Invalid Input')
        value.classList.add('r');
        value.classList.remove('i');
        value.classList.remove('o');
      }
    } else {};
    if (value.classList.contains('i')) {
      e.target.parentElement.parentElement.classList.add('x');
      document.querySelector('.step1').addEventListener('animationend', vanished);

      function vanished() {

        value.value = "";
        value.classList.remove('i');

        document.querySelector('.step2').classList.add('b');
        document.querySelector('.step1').classList.remove('x');
        document.querySelector('.step1').classList.remove('b');
        document.querySelector('.step1').classList.remove('d');
        document.querySelector('.step1').classList.remove('a');

        changer();

        document.querySelector('.step1').removeEventListener('animationend', vanished);
      }
    } else {};
  }
}

document.querySelector('.back').onclick = e => {
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.back').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {

    document.querySelector('.wrapper4').classList.add('x');
    document.querySelector('.wrapper4').addEventListener('animationend', vanished);

    function vanished() {

      value.classList.remove('r');
      value.classList.remove('o');
      value.value = "";

      document.querySelector('.wrapper4').classList.remove('b');
      document.querySelector('.wrapper2').classList.add('a');
      document.querySelector('.wrapper4').classList.remove('x');
      document.querySelector('.step1').classList.remove('a');

      changer();

      document.querySelector('.wrapper4').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.proceed2').onclick = e => {
  document.querySelector('.proceed2').disabled = true;
  document.querySelector('.back2').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.proceed2').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {

    if (fname.value.length === 0 && lname.value.length === 0) {
      alert('Firstname and lastname are required');
      document.querySelector('.proceed2').disabled = false;
      document.querySelector('.back2').disabled = false;
      fname.classList.add('r');
      lname.classList.add('r');
      fname.classList.remove('i');
      lname.classList.remove('i');
    } else {
      document.querySelector('.vloading').classList.add('c');
      timeInterval = window.setInterval(count, 1500);
      setTimeout(() => window.clearInterval(timeInterval), 7500);

      if (fname.value.toLowerCase() === x[0].Firstname.toLowerCase() && lname.value.toLowerCase() === x[0].Lastname.toLowerCase()) {
        setTimeout(() => step3(), 7500);
      } else {
        setTimeout(() => timer(), 7500);
      }
    }

  }

}

document.querySelector('.back2').onclick = e => {

  document.querySelector('.back2').disabled = true;
  document.querySelector('.proceed2').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.back2').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {

    document.querySelector('.step2').classList.add('x');
    document.querySelector('.step2').addEventListener('animationend', vanished);

    function vanished() {

      fname.classList.remove('r');
      lname.classList.remove('r');
      fname.value = "";
      lname.value = "";

      document.querySelector('.step2').classList.remove('b');
      document.querySelector('.step1').classList.add('a');
      document.querySelector('.step1').classList.add('d');
      document.querySelector('.step2').classList.remove('x');

      changer();
      document.querySelector('.back2').disabled = false;
      document.querySelector('.proceed2').disabled = false;
      document.querySelector('.step2').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.submit').onclick = e => {

  document.querySelector('.submit').disabled = true;
  document.querySelector('.fcancel').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.submit').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 20);

  const execute = () => {

    if (fpassword.value.length === 0 && cfpassword.value.length === 0) {
      alert('Password is required');
      fpassword.classList.add('r');
      cfpassword.classList.add('r');
      fpassword.classList.remove('i');
      fpassword.classList.remove('o');
      cfpassword.classList.remove('i');
    } else if (fpassword.value.length > 0) {
      if (fpassword.value.length < 7) {
        alert('Password must be atleast 8 characters above');
        fpassword.classList.add('o');
        fpassword.classList.remove('i');
        fpassword.classList.remove('r');
        cfpassword.classList.remove('r');
        cfpassword.classList.remove('i');
      } else {
        if (fpassword.value.match(ps)) {
          if (fpassword.value === cfpassword.value) {
            fpassword.classList.add('i');
            cfpassword.classList.add('i');
            fpassword.classList.remove('r');
            fpassword.classList.remove('o');
            cfpassword.classList.remove('r');
            cfpassword.classList.remove('o');
          } else {
            alert('Password is not match');
            fpassword.classList.add('o');
            fpassword.classList.remove('r');
            fpassword.classList.remove('i');
            cfpassword.classList.add('r');
            cfpassword.classList.remove('i');
            cfpassword.classList.remove('o');
          }
        } else {
          alert('Password first letter must be uppercase');
          fpassword.classList.add('r');
          fpassword.classList.remove('i');
          fpassword.classList.remove('o');
          cfpassword.classList.remove('r');
        }
      }
    } else {}

    if (fpassword.classList.contains('i') && cfpassword.classList.contains('i')) {

      document.querySelector('.step3').firstElementChild.firstElementChild.innerText = " You've successfully changed your password! ";

      setTimeout(() => passwordChanged(), 2000);

    } else {};

  }
}

document.querySelector('.vc').onclick = e => {

  document.querySelector('.vc').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.vc').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {

    e.target.parentElement.classList.add('x');
    document.querySelector('.vloading').addEventListener('animationend', vanished);

    function vanished() {

      fname.classList.remove('r');
      lname.classList.remove('r');
      fname.value = "";
      lname.value = "";

      document.querySelector('.step2').classList.remove('b');
      document.querySelector('.wrapper2').classList.add('a');
      document.querySelector('.vloading').classList.remove('c');

      document.querySelector('h5').innerText = "5";
      document.querySelector('.vloading').classList.remove('vloading-w');
      document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
      document.querySelector('.vloading').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

      document.querySelector('.vc').style.display = "none";

      countnumber = 5;

      changer();

      document.querySelector('.proceed2').disabled = false;
      document.querySelector('.back2').disabled = false;
      document.querySelector('.vloading').classList.remove('x');
      document.querySelector('.wrapper4').classList.remove('b');
      document.querySelector('.step1').classList.add('d');
      document.querySelector('.vc').disabled = false;
      document.querySelector('.vloading').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.fcancel').onclick = e => {
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.fcancel').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {
    
    e.target.parentElement.parentElement.parentElement.classList.add('x');
    document.querySelector('.wrapper4').addEventListener('animationend', vanished);

    function vanished() {
      eyeClosed();
      document.querySelector('.step3').classList.remove('b');
      document.querySelector('.wrapper2').classList.add('b');
      document.querySelector('.wrapper4').classList.remove('b');
      document.querySelector('.step1').classList.add('d');
      changer();
      document.querySelector('.wrapper4').classList.remove('x');
      document.querySelector('.wrapper4').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.sbtn').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.sbtn').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 20);

  const execute = () => {
    a = sfirstname.value.toLowerCase();
    b = undefined;
    c = slastname.value.toLowerCase();
    d = snumber.value.toLowerCase();
    e = semail.value.toLowerCase();
    f = undefined;
    g = spassword.value;

    if (
      sfirstname.value.length === 0 &&
      slastname.value.length === 0 &&
      snumber.value.length === 0 &&
      semail.value.length === 0 &&
      spassword.value.length === 0 &&
      scpassword.value.length === 0
    ) {
      alert('Fields must not be empty');
      sfirstname.classList.add('r');
      slastname.classList.add('r');
      snumber.classList.add('r');
      semail.classList.add('r');
      spassword.classList.add('r');
      scpassword.classList.add('r');
    } else if (sfirstname.value.length === 0) {
      alert('Firstname must not be empty');
      sfirstname.classList.add('r');
    } else if (slastname.value.length === 0) {
      alert('Lastname must not be empty');
      slastname.classList.add('r');
    } else if (snumber.value.length === 0) {
      alert('Contact number must not be empty');
      snumber.classList.add('r');
    } else if (semail.value.length === 0) {
      alert('Email must not be empty');
      semail.classList.add('r');
    } else if (spassword.value.length === 0) {
      alert('Password must not be empty');
      spassword.classList.add('r');
    } else if (scpassword.value.length === 0) {
      alert('Password is not match');
      scpassword.classList.add('r');
    } else {

      if (sfirstname.value.length < 3) {
        alert('Firstname is too short');
        sfirstname.classList.add('r');
        sfirstname.classList.remove('i');
      } else {

        if (sfirstname.value.length < 15) {
          !sfirstname.value.match(letters) ? alert('Firstname allows only alphabets') || sfirstname.classList.add('r') || sfirstname.classList.remove('i') : sfirstname.classList.add('i') || sfirstname.classList.remove('r');
        } else {
          alert('Firstname is too long');
          sfirstname.classList.remove('i');
          sfirstname.classList.add('r');
        }
      }

      if (slastname.value.length < 4) {
        alert('Lastname is too short');
        slastname.classList.add('r');
        slastname.classList.remove('i');
      } else {
        if (slastname.value.length < 15) {
          !slastname.value.match(letters) ? alert('Lastname allows only alphabets') || slastname.classList.add('r') || slastname.classList.remove('i') : slastname.classList.add('i') || slastname.classList.remove('r');
        } else {
          alert('Lastname is too long');
          slastname.classList.remove('i');
          slastname.classList.add('r');
        }
      }

      if (snumber.value.length > 0) {
        if (snumber.value.length < 12) {
          existed = users.filter(user => {
            return user.Contact_Number === snumber.value;
          })

          if (existed.length > 0) {
            alert('Contact number is already registered');
            snumber.classList.add('o');
            snumber.classList.remove('r');
            snumber.classList.remove('i');
          } else {

            if (snumber.value.match(numbers)) {
              snumber.classList.add('i');
              snumber.classList.remove('r');
              snumber.classList.remove('o');
            } else {
              alert('Contact number is invalid');
              snumber.classList.add('r');
              snumber.classList.remove('o');
              snumber.classList.remove('i');
            }

          }

        } else {
          alert('Contact number must be 11 digits only');
        }
      } else {};

      if (semail.value.length > 0) {
        if (semail.value.length < 17) {
          alert('Email is too short');
          semail.classList.add('r');
          semail.classList.remove('i');
          semail.classList.remove('o');
        } else if (semail.value.length < 40) {
          existed = users.filter(user => {
            return user.Email === semail.value;
          })

          if (existed.length > 0) {
            alert('Email is already registered');
            semail.classList.add('o');
            semail.classList.remove('r');
            semail.classList.remove('i');
          } else {
            if (semail.value.match(email)) {
              semail.classList.add('i');
              semail.classList.remove('r');
              semail.classList.remove('o');
            } else {
              alert('Email is invalid');
              semail.classList.add('r');
              semail.classList.remove('o');
              semail.classList.remove('i');
            }
          }
        } else {
          alert('Email is too long');
          semail.classList.add('r');
          semail.classList.remove('i');
          semail.classList.remove('o');
        }
      } else {}


      if (spassword.value.length > 0) {
        if (spassword.value.length < 7) {
          alert('Password is too short');
          spassword.classList.add('r');
          spassword.classList.remove('i');
        } else {

          !spassword.value.match(ps) ? alert('Password first letter must be uppercase') || spassword.classList.add('r') ||
            spassword.classList.remove('i') : spassword.classList.add('i') ||
            spassword.classList.remove('r');

        }
      } else {};

      scpassword.value !== spassword.value ? alert('Password is not match') || scpassword.classList.add('r') || scpassword.classList.remove('i') : scpassword.classList.add('i') || scpassword.classList.remove('r');

      if (
        sfirstname.classList.contains('i') &&
        slastname.classList.contains('i') &&
        snumber.classList.contains('i') &&
        semail.classList.contains('i') &&
        spassword.classList.contains('i') &&
        scpassword.classList.contains('i')
      ) {
        document.querySelector('.sbtn').disabled = true;
        auser = addNewUser(a, b, c, d, e, f, g);
        accuser = newAccounts(a, e);
        createElements(accuser);
        document.querySelector('.num').innerText = accountsPanel.length;
        localStorage.setItem('num', JSON.stringify(accountsPanel.length));
        accountsPanel.length > 0 ? document.querySelector('.num').style.display = "block" : document.querySelector('.num').style.display = "none";
        eyeClosed();
        sfirstname.value = "";
        slastname.value = "";
        snumber.value = "";
        semail.value = "";
        spassword.value = "";
        scpassword.value = "";
        sfirstname.classList.remove('i');
        slastname.classList.remove('i');
        snumber.classList.remove('i');
        semail.classList.remove('i');
        spassword.classList.remove('i');
        scpassword.classList.remove('i');
        document.querySelector('.dialog').classList.add('c');

      } else {};

      if (document.querySelector('.dialog').classList.contains('c')) {
        document.querySelectorAll('input').forEach(ins => ins.disabled = true);
        document.querySelector('.sbtn').disabled = true;
        document.querySelector('.ao').disabled = true;
      } else {
        document.querySelectorAll('input').forEach(ins => ins.disabled = false);
        document.querySelector('.sbtn').disabled = false;
        document.querySelector('.ao').disabled = false;
      }
    }
  }
}

var userUser = JSON.parse(localStorage.getItem('userOn')) || [];

const userOn = (first, middle, last, number, mail, address) => {
  userUser.push({
    first,
    middle,
    last,
    number,
    mail,
    address
  });

  localStorage.setItem('userOn', JSON.stringify(userUser));

  return {
    first,
    middle,
    last,
    number,
    mail,
    address
  }

}

const userPanelDisplay = ({
  first,
  middle,
  last,
  number,
  mail,
  address
}) => {

  var
    wuser = document.querySelector('.user'),
    dfirstname = document.querySelector('.dfirstname'),
    dmiddlename = document.querySelector('.dmiddlename'),
    dlastname = document.querySelector('.dlastname'),
    dnumber = document.querySelector('.dnumber'),
    demail = document.querySelector('.demail'),
    dress = document.querySelector('.dress'),
    dpassword = document.querySelector('.dpassword');

  wuser.innerText = first;
  dfirstname.firstElementChild.innerText = first;
  dmiddlename.firstElementChild.innerText = middle;
  dlastname.firstElementChild.innerText = last;
  dnumber.firstElementChild.innerText = number;
  demail.firstElementChild.innerText = mail;
  dress.firstElementChild.innerText = address;
  dpassword.firstElementChild.innerText = "*****";

}

const login = () => {

  document.querySelector('.wrapper2').classList.add('x');
  document.querySelector('.wrapper2').addEventListener('animationend', vanished);

  function vanished() {

    lemail.value = "";
    lpassword.value = "";
    lemail.classList.remove('i');
    lpassword.classList.remove('i');

    eyeClosed();

    document.querySelector('.wrapper3').classList.add('c');
    if (document.querySelector('.wrapper3').classList.contains('c')) {
      let C = "c";
      userOnline.push(C);
      localStorage.setItem('online', JSON.stringify(userOnline));
    } else {};
    changer();
    setTimeout(() => check(), 500);
    document.querySelector('.wrapper2').classList.remove('d');
    document.querySelector('.wrapper2').classList.remove('b');
    document.querySelector('.wrapper2').classList.remove('a');
    document.querySelector('.wrapper2').classList.remove('x');
    document.querySelector('.wrapper2').removeEventListener('animationend', vanished);
  }

}

const check = () => {
  document.querySelector('.dmiddlename').firstElementChild.innerText == "Undefined" && document.querySelector('.dress').firstElementChild.innerText == "Undefined" ? `${document.querySelector('.dmiddlename').firstElementChild.innerText = ""}` || `${document.querySelector('.dress').firstElementChild.innerText = ""}` : false;

  changer();
}

document.querySelector('.lbtn').onclick = e => {

  document.querySelector('.lbtn').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.lbtn').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {
    if (lemail.value.length === 0 && lpassword.value.length === 0) {
      alert('Fields must not be empty');
      document.querySelector('.lbtn').disabled = false;
      lemail.classList.add('r');
      lpassword.classList.add('r');
    } else if (lemail.value.length === 0) {
      alert('Email is required');
      document.querySelector('.lbtn').disabled = false;
      lemail.classList.add('r');
    } else if (lpassword.value.length === 0) {
      alert('Password is required');
      document.querySelector('.lbtn').disabled = false;
      lpassword.classList.add('r');
    } else if (lemail.value.length > 0) {

      existed = users.filter(user => {
        return user.Email === lemail.value;
      });

      if (existed.length > 0) {
        lemail.classList.add('i');
        lemail.classList.remove('r');
        lemail.classList.remove('o');

        if (existed[0].Password === lpassword.value) {
          document.querySelector('.lbtn').disabled = true;
          first = existed[0].Firstname;
          middle = existed[0].Middlename;
          last = existed[0].Lastname;
          number = existed[0].Contact_Number;
          mail = existed[0].Email;
          address = existed[0].Address;

          newVal = userOn(first, middle, last, number, mail, address);

          userPanelDisplay(newVal);

          lpassword.classList.add('i');
          lpassword.classList.remove('r');
          lpassword.classList.remove('o');

        } else {
          alert('Wrong Password');
          document.querySelector('.lbtn').disabled = false;
          lpassword.classList.add('r');
          lpassword.classList.remove('i');
          lpassword.classList.remove('o');
        }

      } else {

        if (lemail.value.match(email)) {
          alert('This email is not yet registered');
          document.querySelector('.lbtn').disabled = false;
          lemail.classList.add('o');
          lpassword.classList.add('o');
          lemail.classList.remove('i');
          lemail.classList.remove('r');
        } else {
          alert('Invalid Email');
          document.querySelector('.lbtn').disabled = false;
          lemail.classList.add('r');
          lpassword.classList.add('o');
          lemail.classList.remove('i');
          lemail.classList.remove('o');
        }

      }

    } else {};

    if (lemail.classList.contains('i') && lpassword.classList.contains('i')) {
      login();
    } else {};

  }
}

userUser.forEach(userPanelDisplay);

if (userOnline.length > 0) {
  document.querySelector('.wrapper2').classList.remove('b');
  document.querySelector('.wrapper2').classList.remove('d');
  document.querySelector('.wrapper2').classList.remove('x');
  document.querySelector('.wrapper2').classList.remove('a');
  document.querySelector('.wrapper3').classList.add(userOnline);
  changer();
  document.querySelector('.dmiddlename').firstElementChild.innerText == "Undefined" && document.querySelector('.dress').firstElementChild.innerText == "Undefined" ? `${document.querySelector('.dmiddlename').firstElementChild.innerText = ""}` || `${document.querySelector('.dress').firstElementChild.innerText = ""}` : false;
} else {};

document.querySelector('.logout').onclick = e => {

  document.querySelector('.lbtn').disabled = false;
  document.querySelector('.logout').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.logout').classList.remove('clicked'), 70);
  setTimeout(() => execute(), 220);


  const execute = () => {
    localStorage.removeItem('online');
    localStorage.removeItem('userOn');
    userOnline = userOnline.filter(userO => userO === users);
    userUser = userUser.filter(user => user === userOnline);

    document.querySelector('.dfirstname').firstElementChild.innerText = "";

    document.querySelector('.dmiddlename').firstElementChild.innerText = "";

    document.querySelector('.dlastname').firstElementChild.innerText = "";

    document.querySelector('.dnumber').firstElementChild.innerText = "";

    document.querySelector('.demail').firstElementChild.innerText = "";

    document.querySelector('.dress').firstElementChild.innerText = "";

    document.querySelector('.wrapper3').classList.add('x');
    document.querySelector('.wrapper3').addEventListener('animationend', vanished);

    function vanished() {
      document.querySelector('.wrapper3').classList.remove('c');
      document.querySelector('.wrapper2').classList.add('b');
      document.querySelector('.wrapper3').classList.remove('x');
      changer();
      document.querySelector('.logout').disabled = false;
      document.querySelector('.wrapper3').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.edit-account').onclick = e => {
  document.querySelector('.edit-account').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.edit-account').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {

    x = [];
    document.querySelector('.edit-modal').classList.add('aa');

    changer();

    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value = document.querySelector('.dfirstname').firstElementChild.innerText;
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value = document.querySelector('.dmiddlename').firstElementChild.innerText;
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value = document.querySelector('.dlastname').firstElementChild.innerText;
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = document.querySelector('.dnumber').firstElementChild.innerText;
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = document.querySelector('.demail').firstElementChild.innerText;
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = document.querySelector('.dress').firstElementChild.innerText;
    //  document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = document.querySelector('.dpassword').firstElementChild.innerText;

    x = users.filter(user => {
      return user.Email === document.querySelector('.demail').firstElementChild.innerText;
    })

    x.length > 0 ? document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value = x[0].Password : "";

  }

  ul = document.querySelector('.edit-modal').firstElementChild.nextElementSibling;

  ifirstname = ul.firstElementChild.firstElementChild;
  imiddlename = ul.firstElementChild.nextElementSibling.firstElementChild;
  ilastname = ul.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
  inumber = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  inemail = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  iaddress = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  ipassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  icpassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;

  ifirstname.classList.remove("r");
  imiddlename.classList.remove("r");
  ilastname.classList.remove("r");
  inumber.classList.remove("r");
  inemail.classList.remove("r");
  iaddress.classList.remove("r");
  ipassword.classList.remove("r");
  icpassword.classList.remove("r");

}

document.querySelector('.save').onclick = e => {
  document.querySelector('.save').disabled = true;
  e.preventDefault();
  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.save').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {

    ul = document.querySelector('.edit-modal').firstElementChild.nextElementSibling;

    ifirstname = ul.firstElementChild.firstElementChild;
    imiddlename = ul.firstElementChild.nextElementSibling.firstElementChild;
    ilastname = ul.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
    inumber = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    inemail = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    iaddress = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    ipassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    icpassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;

    if (
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value.length === 0 &&
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0
    ) {
      alert('Fields must be not empty');
      document.querySelector('.save').disabled = false;
      ifirstname.classList.add('r');
      imiddlename.classList.add('r');
      ilastname.classList.add('r');
      inumber.classList.add('r');
      inemail.classList.add('r');
      iaddress.classList.add('r');
      ipassword.classList.add('r');
      icpassword.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length === 0) {
      alert('Firstname is required');
      document.querySelector('.save').disabled = false;
      ifirstname.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length === 0) {
      alert('Middlename is required');
      document.querySelector('.save').disabled = false;
      imiddlename.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
      alert('Lastname is required');
      document.querySelector('.save').disabled = false;
      ilastname.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
      alert('Contact number is required');
      document.querySelector('.save').disabled = false;
      inumber.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
      alert('Email is required');
      document.querySelector('.save').disabled = false;
      inemail.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
      alert('Address is required');
      document.querySelector('.save').disabled = false;
      iaddress.classList.add('r');
    } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value.length === 0) {
      alert('Password is required');
      document.querySelector('.save').disabled = false;
      ipassword.classList.add('r');
    } else {

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length < 3) {
          alert('Firstname is too short');
          document.querySelector('.save').disabled = false;
          ifirstname.classList.add('r');
          ifirstname.classList.remove('i');
        } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length > 15) {
          alert('Firstname is too long');
          document.querySelector('.save').disabled = false;
          ifirstname.classList.add('r');
          ifirstname.classList.remove('i');
        } else {
          if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.match(letters)) {
            ifirstname.classList.add('i');
            document.querySelector('.save').disabled = false;
            ifirstname.classList.remove('r');
          } else {
            alert('Firstname allows only alphabets');
            document.querySelector('.save').disabled = false;
            ifirstname.classList.add('r');
            ifirstname.classList.remove('i');
          }
        }
      } else {};

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length < 3) {
          alert('Middlename is too short');
          document.querySelector('.save').disabled = false;
          imiddlename.classList.add('r');
          imiddlename.classList.remove('i');
        } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length > 10) {
          alert('Middlename is too long');
          document.querySelector('.save').disabled = false;
          imiddlename.classList.add('r');
          imiddlename.classList.remove('i');
        } else {
          if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.match(letters)) {
            imiddlename.classList.add('i');
            document.querySelector('.save').disabled = false;
            imiddlename.classList.remove('r');
          } else {
            alert('Middlename allows only alphabets');
            document.querySelector('.save').disabled = false;
            imiddlename.classList.add('r');
            imiddlename.classList.remove('i');
          }
        }
      } else {};

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length < 3) {
          alert('Lastname is too short');
          document.querySelector('.save').disabled = false;
          ilastname.classList.add('r');
          ilastname.classList.remove('i');
        } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length > 15) {
          alert('Lastname is too long');
          document.querySelector('.save').disabled = false;
          ilastname.classList.add('r');
          ilastname.classList.remove('i');
        } else {
          if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.match(letters)) {
            ilastname.classList.add('i');
            document.querySelector('.save').disabled = false;
            ilastname.classList.remove('r');
          } else {
            alert('Lastname allows only alphabets');
            document.querySelector('.save').disabled = false;
            ilastname.classList.add('r');
            ilastname.classList.remove('i');
          }
        }
      } else {};

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 12) {
          if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === document.querySelector('.dnumber').firstElementChild.innerText) {
            inumber.classList.add('i');
            document.querySelector('.save').disabled = false;
            inumber.classList.remove('r');
            inumber.classList.remove('o');
          } else {
            existed = users.filter(user => {
              return user.Contact_Number === document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
            })

            if (existed.length > 0) {
              alert('This number is already registered');
              document.querySelector('.save').disabled = false;
              inumber.classList.add('o');
              inumber.classList.remove('r');
              inumber.classList.remove('i');
            } else {
              if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.match(numbers)) {
                inumber.classList.add('i');
                document.querySelector('.save').disabled = false;
                inumber.classList.remove('r');
                inumber.classList.remove('o');
              } else {
                alert('Contact number is invalid');
                document.querySelector('.save').disabled = false;
                inumber.classList.add('r');
                inumber.classList.remove('i');
                inumber.classList.remove('o');
              }
            }
          }
        } else {
          alert('Contact number must be 11 digits only');
          document.querySelector('.save').disabled = false;
          inumber.classList.add('r');
          inumber.classList.remove('i');
          inumber.classList.remove('o');
        }
      } else {};

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 17) {
          alert('Email is too short');
          document.querySelector('.save').disabled = false;
          inumber.classList.add('r');
          inumber.classList.remove('i');
          inumber.classList.remove('o');
        } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 40) {
          if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === document.querySelector('.demail').firstElementChild.innerText) {
            inemail.classList.add('i');
            document.querySelector('.save').disabled = false;
            inemail.classList.remove('r');
            inemail.classList.remove('o');
          } else {
            existed = users.filter(user => {
              return user.Email === document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
            })

            if (existed.length > 0) {
              alert('This email is already registered');
              document.querySelector('.save').disabled = false;
              inemail.classList.add('o');
              inemail.classList.remove('r');
              inemail.classList.remove('i');
            } else {
              if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.match(email)) {
                inemail.classList.add('i');
                document.querySelector('.save').disabled = false;
                inemail.classList.remove('r');
                inemail.classList.remove('o');
              } else {
                alert('Email is invalid');
                document.querySelector('.save').disabled = false;
                inemail.classList.add('r');
                inemail.classList.remove('i');
                inemail.classList.remove('o');
              }
            }
          }
        } else {
          alert('Email is too long');
          document.querySelector('.save').disabled = false;
          inumber.classList.add('r');
          inumber.classList.remove('i');
          inumber.classList.remove('o');
        }
      } else {};



      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 6) {
          alert('Address is invalid');
          document.querySelector('.save').disabled = false;
          iaddress.classList.add('r');
          iaddress.classList.remove('i');
        } else {
          iaddress.classList.add('i');
          document.querySelector('.save').disabled = false;
          iaddress.classList.remove('r');
        }
      } else {};

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value.length > 0) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value.length < 7) {
          alert('Password is too short');
          document.querySelector('.save').disabled = false;
          ipassword.classList.add('r');
          ipassword.classList.remove('i');
        } else {

          if (!document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value.match(ps)) {
            alert('Password first letter must be uppercase');
            document.querySelector('.save').disabled = false;
            ipassword.classList.add('r');
            ipassword.classList.remove('i');
          } else {
            ipassword.classList.add('i');
            document.querySelector('.save').disabled = false;
            ipassword.classList.remove('r');
          }
        }
      } else {};


      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value) {
        icpassword.classList.add('i')
        document.querySelector('.save').disabled = false;
        icpassword.classList.remove('r');
      } else {
        alert('Password is not match');
        document.querySelector('.save').disabled = false;
        icpassword.classList.add('r');
        icpassword.classList.remove('i');
      }

    }
    if (
      ifirstname.classList.contains('i') &&
      imiddlename.classList.contains('i') &&
      ilastname.classList.contains('i') &&
      inumber.classList.contains('i') &&
      inemail.classList.contains('i') &&
      iaddress.classList.contains('i') &&
      ipassword.classList.contains('i') &&
      icpassword.classList.contains('i')
    ) {

      //    document.querySelector('.dfirstname').firstElementChild.innerText = document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value;
      //
      //    document.querySelector('.dmiddlename').firstElementChild.innerText = document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value;
      //
      //    document.querySelector('.dlastname').firstElementChild.innerText = document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value;
      //
      //    document.querySelector('.dnumber').firstElementChild.innerText = document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
      //
      //    document.querySelector('.demail').firstElementChild.innerText = document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
      //
      //    document.querySelector('.dress').firstElementChild.innerText = document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;

      localStorage.removeItem('userOn');
      localStorage.removeItem('user');
      userUser = userUser.filter(user => user === userOnline);

      users = users.filter(user => {
        return user.Email !== x[0].Email;
      })

      var edit = addNewUser(
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value
      )

      var edit = userOn(
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value
      )

      userPanelDisplay(edit);

      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value === x[0].Firstname && document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === x[0].Email) {
        // If no changes to the firstname and email then do nothing here.
      } else if(document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value !== x[0].Firstname && document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value !== x[0].Email) {
        
        localStorage.removeItem('accounts');
        accountsPanel = accountsPanel.filter(accc => {
          return accc.Email !== x[0].Email;
        })
        
        btns = document.querySelectorAll('.account-body');
        acuser = newAccounts(
          document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value,
          document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        )
        btns.forEach(btn => {
          if (btn.firstElementChild.nextElementSibling.innerText === x[0].Email) {
            btn.remove();
          } else {};
        })
        createElements(acuser);

      } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value !== x[0].Firstname && document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value == x[0].Email) {

        localStorage.removeItem('accounts');
        accountsPanel = accountsPanel.filter(accc => {
          return accc.Email !== x[0].Email;
        })
        
        btns = document.querySelectorAll('.account-body');
        acuser = newAccounts(
          document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value,
          document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        )
        btns.forEach(btn => {
          if (btn.firstElementChild.nextElementSibling.innerText === x[0].Email) {
            btn.remove();
          } else {};
        })
        createElements(acuser);

      } else if(document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value == x[0].Firstname && document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value !== x[0].Email) {

        localStorage.removeItem('accounts');
        accountsPanel = accountsPanel.filter(accc => {
          return accc.Email !== x[0].Email;
        })
        
        btns = document.querySelectorAll('.account-body');
        acuser = newAccounts(
          document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value,
          document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
        )
        btns.forEach(btn => {
          if (btn.firstElementChild.nextElementSibling.innerText === x[0].Email) {
            btn.remove();
          } else {};
        })
        createElements(acuser);

      } else {};

      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.value = "";
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
      
      ifirstname.classList.remove("i");
      imiddlename.classList.remove("i");
      ilastname.classList.remove("i");
      inumber.classList.remove("i");
      inemail.classList.remove("i");
      iaddress.classList.remove("i");
      ipassword.classList.remove("i");
      icpassword.classList.remove("i");

      x.pop();

      existed.pop();
      eyeClosed();
      e.target.parentElement.parentElement.classList.add('bb');
      document.querySelector('.edit-modal').addEventListener('animationend', slideback);

      function slideback() {
        document.querySelector('.edit-modal').classList.remove('aa');
        document.querySelector('.edit-modal').classList.remove('bb');
        changer();
        document.querySelector('.save').disabled = false;
        document.querySelector('.edit-account').disabled = false;
        document.querySelector('.edit-modal').removeEventListener('animationend', slideback);
      }
    } else {};

  }
}

document.querySelector('.cancel').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.cancel').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {
    eyeClosed();
    document.querySelector('.edit-modal').classList.remove('aa');
    changer();

    ul = document.querySelector('.edit-modal').firstElementChild.nextElementSibling;

    ifirstname = ul.firstElementChild.firstElementChild;
    imiddlename = ul.firstElementChild.nextElementSibling.firstElementChild;
    ilastname = ul.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
    inumber = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    inemail = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    iaddress = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    ipassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
    icpassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;

    x.pop();
    existed.pop();

    e.target.parentElement.parentElement.classList.add('bb');
    document.querySelector('.edit-modal').addEventListener('animationend', slideback);

    function slideback() {
      document.querySelector('.edit-modal').classList.remove('bb');

      ifirstname.classList.remove('i');
      ifirstname.classList.remove('r');
      imiddlename.classList.remove('i');
      imiddlename.classList.remove('r');
      ilastname.classList.remove('i');
      ilastname.classList.remove('r');
      inumber.classList.remove('i');
      inumber.classList.remove('o');
      inumber.classList.remove('r');
      inemail.classList.remove('i');
      inemail.classList.remove('o');
      inemail.classList.remove('r');
      iaddress.classList.remove('i');
      iaddress.classList.remove('r');
      ipassword.classList.remove('i');
      ipassword.classList.remove('r');
      icpassword.classList.remove('i');
      icpassword.classList.remove('r');
      document.querySelector('.edit-account').disabled = false;
      document.querySelector('.edit-modal').removeEventListener('animationend', slideback);
    }
  }

}

document.querySelector('.delete-account').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.delete-account').classList.remove('clicked'), 70);

  document.querySelector('.delete-promt').classList.add('c');
}

document.querySelector('.confirm-delete').onclick = e => {
  document.querySelector('.confirm-delete').disabled = true;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.confirm-delete').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 200);

  const execute = () => {
    btns = document.querySelectorAll('.account-body');
    localStorage.removeItem('userOn');
    localStorage.removeItem('online');
    localStorage.removeItem('user');
    localStorage.removeItem('accounts');
    localStorage.removeItem('num');
    userUser = userUser.filter(user => user === userOnline);

    users = users.filter(user => {
      return user.Email !== document.querySelector('.demail').firstElementChild.innerText;
    })

    accountsPanel = accountsPanel.filter(accs => {
      return accs.Email !== document.querySelector('.demail').firstElementChild.innerText;
    })

    btns.forEach(btn => {
      btn.firstElementChild.nextElementSibling.innerText === document.querySelector('.demail').firstElementChild.innerText === true ? btn.remove() : "";
    })

    localStorage.setItem('user', JSON.stringify(users));
    localStorage.setItem('accounts', JSON.stringify(accountsPanel));
    localStorage.setItem('num', JSON.stringify(accountsPanel.length));
    document.querySelector('.num').innerText = accountsPanel.length;

    document.querySelector('.num').innerText === "0" ? document.querySelector('.num').style.display = "none" || localStorage.removeItem('num') : document.querySelector('.num').style.display = "block"

    checker();

    document.querySelector('.dfirstname').firstElementChild.innerText = "";

    document.querySelector('.dmiddlename').firstElementChild.innerText = "";

    document.querySelector('.dlastname').firstElementChild.innerText = "";

    document.querySelector('.dnumber').firstElementChild.innerText = "";

    document.querySelector('.demail').firstElementChild.innerText = "";

    document.querySelector('.dress').firstElementChild.innerText = "";

    e.target.parentElement.parentElement.parentElement.parentElement.classList.add('x');

    document.querySelector('.wrapper3').addEventListener('animationend', vanished);

    function vanished() {
      document.querySelector('.wrapper3').classList.remove('c');
      document.querySelector('.wrapper2').classList.add('a');
      document.querySelector('.wrapper2').classList.remove('d');
      document.querySelector('.wrapper3').classList.remove('x');
      changer();
      document.querySelector('.delete-promt').classList.remove('c');
      document.querySelector('.confirm-delete').disabled = false;
      document.querySelector('.wrapper3').removeEventListener('animationend', vanished);
    }
  }
}

document.querySelector('.cancel-delete').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.cancel-delete').classList.remove('clicked'), 70);

  setTimeout(() => execute(), 220);

  const execute = () => {
    e.target.parentElement.parentElement.classList.add('x');
    document.querySelector('.delete-promt').addEventListener('animationend', vanished);

    function vanished() {
      document.querySelector('.delete-promt').classList.remove('c');
      document.querySelector('.delete-promt').classList.remove('x');
      document.querySelector('.delete-promt').removeEventListener('animationend', vanished);
    }
  }
}