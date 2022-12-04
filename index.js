const signForm = document.querySelector('.sign');
const loginForm = document.querySelector('.login');
var show3 = document.querySelector('.show3');
var
  sfirstname = signForm['firstname'],
  slastname = signForm['lastname'],
  snumber = signForm['number'],
  semail = signForm['email'],
  spassword = signForm['password'],
  scpassword = signForm['confirmpassword'],
  show1 = signForm['show'];
var
  lemail = loginForm['email'],
  lpassword = loginForm['password'],
  show2 = loginForm['show'];

var existed = [];

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

show1.oninput = e => {
  e.target.checked === true ? `${spassword.type = "text"}` && `${scpassword.type = "text"}` : `${spassword.type = "password"}` && `${scpassword.type = "password"}`;
}

show2.oninput = e => {
  e.target.checked === true ? lpassword.type = "text" : lpassword.type = "password";
}

show3.oninput = e => {
  e.target.checked === true ? `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "text"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "text"}` : `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}`
}

document.querySelector('.ao').onclick = e => {
  e.preventDefault();
  e.target.parentElement.parentElement.classList.add('x');
  document.querySelector('.wrapper1').addEventListener('animationend', vanished);

  function vanished() {
    document.querySelector('.wrapper1').classList.remove('a');
    document.querySelector('.wrapper2').classList.add('b');
    document.querySelector('.wrapper1').classList.remove('x');
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


  show1.checked === true ? `${show1.checked = false }` && `${spassword.type = "password"}` && `${scpassword.type = "password"}` : `${spassword.type = "password"}` && `${scpassword.type = "password"}`;

}

document.querySelector('.no').onclick = e => {
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

    show2.checked === true ? `${show2.checked = false}` && `${lpassword.type = "password"}` : lpassword.type = "password";

    document.querySelector('.wrapper2').classList.remove('b');
    document.querySelector('.wrapper1').classList.add('a');
    document.querySelector('.wrapper2').classList.remove('d');
    document.querySelector('.wrapper2').classList.remove('x');
    document.querySelector('.wrapper2').removeEventListener('animationend', vanished);
  }
}

document.querySelector('.cdialog').onclick = e => {
  e.target.parentElement.classList.add('x');
  document.querySelector('.wrapper1').classList.add('x');
  document.querySelector('.dialog').addEventListener('animationend', vanished);
  document.querySelector('.wrapper1').addEventListener('animationend', vanished);

  function vanished() {
    document.querySelector('.dialog').classList.remove('c');
    document.querySelector('.dialog').classList.remove('x');
    document.querySelector('.wrapper1').classList.remove('a');
    document.querySelector('.wrapper2').classList.add('b');
    document.querySelector('.wrapper1').classList.remove('x');

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

document.querySelector('.sbtn').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.sbtn').classList.remove('clicked'), 70);

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
      auser = addNewUser(a, b, c, d, e, f, g);
      sfirstname.value = "";
      slastname.value = "";
      snumber.value = "";
      semail.value = "";
      spassword.value = "";
      scpassword.value = "";
      show1.checked === true ? `${show1.checked = false }` && `${spassword.type = "password"}` && `${scpassword.type = "password"}` : `${spassword.type = "password"}` && `${scpassword.type = "password"}`;


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

  } // End of first statement

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
  };
}

const login = ({
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

  setTimeout(() => check(), 500);

}

const check = () => {
  document.querySelector('.dmiddlename').firstElementChild.innerText == "Undefined" && document.querySelector('.dress').firstElementChild.innerText == "Undefined" ? `${document.querySelector('.dmiddlename').firstElementChild.innerText = ""}` || `${document.querySelector('.dress').firstElementChild.innerText = ""}` : "";
}

document.querySelector('.lbtn').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.lbtn').classList.remove('clicked'), 70);

  if (lemail.value.length === 0 && lpassword.value.length === 0) {
    alert('Fields must not be empty');
    lemail.classList.add('r');
    lpassword.classList.add('r');
  } else if (lemail.value.length === 0) {
    alert('Email is required');
    lemail.classList.add('r');
  } else if (lpassword.value.length === 0) {
    alert('Password is required');
    lpassword.classList.add('r');
  } else if (lemail.value.length > 0) {

    existed = users.filter(user => {
      return user.Email === lemail.value;
    });

    if (existed.length > 0) {
      lemail.classList.add('i');
      lemail.classList.remove('r');
      lemail.classList.remove('o');
      existed.filter(exist => {
        if (exist.Password === lpassword.value) {
          lpassword.classList.add('i');
          lpassword.classList.remove('r');

          first = existed[0].Firstname;
          middle = existed[0].Middlename;
          last = existed[0].Lastname;
          number = existed[0].Contact_Number;
          mail = existed[0].Email;
          address = existed[0].Address;

          const existValue = userOn(first, middle, last, number, mail, address);

          login(existValue);

          e.target.parentElement.parentElement.classList.add('x');
          document.querySelector('.wrapper2').addEventListener('animationend', vanished);

          function vanished() {

            lemail.classList.remove('i');
            lpassword.classList.remove('i');
            lemail.value = "";
            lpassword.value = "";

            show2.checked === true ? `${show2.checked = false}` && `${lpassword.type = "password"}` : lpassword.type = "password";

            document.querySelector('.wrapper2').classList.remove('b');
            document.querySelector('.wrapper2').classList.remove('d');
            document.querySelector('.wrapper2').classList.remove('x');
            document.querySelector('.wrapper3').classList.add('c');

            if (document.querySelector('.wrapper3').classList.contains('c')) {
              let letter = "c";
              localStorage.setItem('online', JSON.stringify(letter));
            } else {
              "";
            }

            document.querySelector('.wrapper2').removeEventListener('animationend', vanished);
          }

        } else {
          alert('Wrong Password');
          lpassword.classList.add('r');
          lpassword.classList.remove('i');
        }
      })

    } else {

      if (lemail.value.match(email)) {
        alert('This email is not yet registered');
        lemail.classList.add('o');
        lemail.classList.remove('r');
        lemail.classList.remove('i');
      } else {
        alert('This email is invalid');
        lemail.classList.add('r');
        lemail.classList.remove('i');
        lemail.classList.remove('o');
      }
    }

  } else {};

  if (lemail.classList.contains('i') && lpassword.classList.contains('i')) {
    login();
  } else {

  }


}


userUser.forEach(login);


if (userOnline.length > 0) {
  document.querySelector('.wrapper2').classList.remove('b');
  document.querySelector('.wrapper2').classList.remove('d');
  document.querySelector('.wrapper2').classList.remove('x');
  document.querySelector('.wrapper3').classList.add(userOnline);
} else {};

document.querySelector('.logout').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.logout').classList.remove('clicked'), 70);

  localStorage.removeItem('online');
  localStorage.removeItem('userOn');

  document.querySelector('.dfirstname').firstElementChild.innerText = "";

  document.querySelector('.dmiddlename').firstElementChild.innerText = "";

  document.querySelector('.dlastname').firstElementChild.innerText = "";

  document.querySelector('.dnumber').firstElementChild.innerText = "";

  document.querySelector('.demail').firstElementChild.innerText = "";

  document.querySelector('.dress').firstElementChild.innerText = "";

  e.target.parentElement.parentElement.parentElement.classList.add('x');
  document.querySelector('.wrapper3').addEventListener('animationend', vanished);

  function vanished() {
    document.querySelector('.wrapper3').classList.remove('c');
    document.querySelector('.wrapper2').classList.add('b');
    document.querySelector('.wrapper3').classList.remove('x');
    document.querySelector('.wrapper3').removeEventListener('animationend', vanished);
  }
}

document.querySelector('.edit-account').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.edit-account').classList.remove('clicked'), 70);

  x = [];
  document.querySelector('.edit-modal').classList.add('aa');

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

  x.length > 0 ? document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = x[0].Password : "";

}

document.querySelector('.save').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.save').classList.remove('clicked'), 70);

  e.preventDefault();
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
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0 &&
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0
  ) {
    alert('Fields must be not empty');
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
    ifirstname.classList.add('r');
  } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length === 0) {
    alert('Middlename is required');
    imiddlename.classList.add('r');
  } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
    alert('Lastname is required');
    ilastname.classList.add('r');
  } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
    alert('Contact number is required');
    inumber.classList.add('r');
  } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
    alert('Email is required');
    inemail.classList.add('r');
  } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
    alert('Address is required');
    iaddress.classList.add('r');
  } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length === 0) {
    alert('Password is required');
    ipassword.classList.add('r');
  } else {

    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length < 3) {
        alert('Firstname is too short');
        ifirstname.classList.add('r');
        ifirstname.classList.remove('i');
      } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.length > 15) {
        alert('Firstname is too long');
        ifirstname.classList.add('r');
        ifirstname.classList.remove('i');
      } else {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value.match(letters)) {
          ifirstname.classList.add('i');
          ifirstname.classList.remove('r');
        } else {
          alert('Firstname allows only alphabets');
          ifirstname.classList.add('r');
          ifirstname.classList.remove('i');
        }
      }
    } else {};

    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length < 3) {
        alert('Middlename is too short');
        imiddlename.classList.add('r');
        imiddlename.classList.remove('i');
      } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.length > 10) {
        alert('Middlename is too long');
        imiddlename.classList.add('r');
        imiddlename.classList.remove('i');
      } else {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value.match(letters)) {
          imiddlename.classList.add('i');
          imiddlename.classList.remove('r');
        } else {
          alert('Middlename allows only alphabets');
          imiddlename.classList.add('r');
          imiddlename.classList.remove('i');
        }
      }
    } else {};

    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length < 3) {
        alert('Lastname is too short');
        ilastname.classList.add('r');
        ilastname.classList.remove('i');
      } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.length > 15) {
        alert('Lastname is too long');
        ilastname.classList.add('r');
        ilastname.classList.remove('i');
      } else {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value.match(letters)) {
          ilastname.classList.add('i');
          ilastname.classList.remove('r');
        } else {
          alert('Lastname allows only alphabets');
          ilastname.classList.add('r');
          ilastname.classList.remove('i');
        }
      }
    } else {};

    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 12) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === document.querySelector('.dnumber').firstElementChild.innerText) {
          inumber.classList.add('i');
          inumber.classList.remove('r');
          inumber.classList.remove('o');
        } else {
          existed = users.filter(user => {
            return user.Contact_Number === document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
          })

          if (existed.length > 0) {
            alert('This number is already registered');
            inumber.classList.add('o');
            inumber.classList.remove('r');
            inumber.classList.remove('i');
          } else {
            if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.match(numbers)) {
              inumber.classList.add('i');
              inumber.classList.remove('r');
              inumber.classList.remove('o');
            } else {
              alert('Contact number is invalid');
              inumber.classList.add('r');
              inumber.classList.remove('i');
              inumber.classList.remove('o');
            }
          }
        }
      } else {
        alert('Contact number must be 11 digits only');
        inumber.classList.add('r');
        inumber.classList.remove('i');
        inumber.classList.remove('o');
      }
    } else {};

    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 17) {
        alert('Email is too short');
        inumber.classList.add('r');
        inumber.classList.remove('i');
        inumber.classList.remove('o');
      } else if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 40) {
        if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === document.querySelector('.demail').firstElementChild.innerText) {
          inemail.classList.add('i');
          inemail.classList.remove('r');
          inemail.classList.remove('o');
        } else {
          existed = users.filter(user => {
            return user.Email === document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
          })

          if (existed.length > 0) {
            alert('This email is already registered');
            inemail.classList.add('o');
            inemail.classList.remove('r');
            inemail.classList.remove('i');
          } else {
            if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.match(email)) {
              inemail.classList.add('i');
              inemail.classList.remove('r');
              inemail.classList.remove('o');
            } else {
              alert('Email is invalid');
              inemail.classList.add('r');
              inemail.classList.remove('i');
              inemail.classList.remove('o');
            }
          }
        }
      } else {
        alert('Email is too long');
        inumber.classList.add('r');
        inumber.classList.remove('i');
        inumber.classList.remove('o');
      }
    } else {};



    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 6) {
        alert('Address is invalid');
        iaddress.classList.add('r');
        iaddress.classList.remove('i');
      } else {
        iaddress.classList.add('i');
        iaddress.classList.remove('r');
      }
    } else {};

    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length > 0) {
      if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.length < 7) {
        alert('Password is too short');
        ipassword.classList.add('r');
        ipassword.classList.remove('i');
      } else {

        !document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value.match(ps) ? alert('Password first letter must be uppercase') || ipassword.classList.add('r') ||
          ipassword.classList.remove('i') : ipassword.classList.add('i') ||
          ipassword.classList.remove('r');
      }
    } else {};


    if (document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value === document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value) {
      icpassword.classList.add('i')
      icpassword.classList.remove('r');
    } else {
      alert('Password is not match');
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
    userUser.pop();

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
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
    )

    var edit = userOn(
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value,
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value,
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value,
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value,
      document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
    )

    login(edit);

    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";
    document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = "";

    show3.checked === true ? `${show3.checked = false}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` : `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}`;

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

    e.target.parentElement.parentElement.classList.add('bb');
    document.querySelector('.edit-modal').addEventListener('animationend', slideback);

    function slideback() {
      document.querySelector('.edit-modal').classList.remove('aa');
      document.querySelector('.edit-modal').classList.remove('bb');
      document.querySelector('.edit-modal').removeEventListener('animationend', slideback);
    }
  } else {};

}

document.querySelector('.cancel').onclick = e => {
  
  ul = document.querySelector('.edit-modal').firstElementChild.nextElementSibling;

  ifirstname = ul.firstElementChild.firstElementChild;
  imiddlename = ul.firstElementChild.nextElementSibling.firstElementChild;
  ilastname = ul.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
  inumber = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  inemail = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  iaddress = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  ipassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;
  icpassword = ul.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild;

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.cancel').classList.remove('clicked'), 70);

  x.pop();
  existed.pop();

  show3.checked === true ? `${show3.checked = false}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = ""}` : `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.type = "password"}` && `${document.querySelector('.edit-modal').firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value = ""}`;

  e.target.parentElement.parentElement.classList.add('bb');
  document.querySelector('.edit-modal').addEventListener('animationend', slideback);

  function slideback() {
    document.querySelector('.edit-modal').classList.remove('aa');
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
    document.querySelector('.edit-modal').removeEventListener('animationend', slideback);
  }
}

document.querySelector('.delete-account').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.delete-account').classList.remove('clicked'), 70);

  document.querySelector('.delete-promt').classList.add('c');
}

document.querySelector('.confirm-delete').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.confirm-delete').classList.remove('clicked'), 70);

  localStorage.removeItem('userOn');
  localStorage.removeItem('online');
  localStorage.removeItem('user');
  userUser.pop();

  users = users.filter(user => {
    return user.Email !== document.querySelector('.demail').firstElementChild.innerText;
  })

  localStorage.setItem('user', JSON.stringify(users));

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
    document.querySelector('.wrapper2').classList.add('b');
    document.querySelector('.wrapper2').classList.remove('d');
    document.querySelector('.wrapper3').classList.remove('x');
    document.querySelector('.delete-promt').classList.remove('c');
    document.querySelector('.wrapper3').removeEventListener('animationend', vanished);
  }
}

document.querySelector('.cancel-delete').onclick = e => {

  e.target.classList.add('clicked');
  setTimeout(() => document.querySelector('.cancel-delete').classList.remove('clicked'), 70);

  e.target.parentElement.parentElement.classList.add('x');
  document.querySelector('.delete-promt').addEventListener('animationend', vanished);

  function vanished() {
    document.querySelector('.delete-promt').classList.remove('c');
    document.querySelector('.delete-promt').classList.remove('x');
    document.querySelector('.delete-promt').removeEventListener('animationend', vanished);
  }
}
