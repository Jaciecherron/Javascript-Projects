let btnE1 = document.getElementById("btn");
let birthdayE1 = document.getElementById("birthday");
let resultE1 = document.getElementById("result");

function calculateAge(){
  let birthdaValue = birthdayE1.ariaValueMax;
  if (birthdayValue === "") {
    alert ("Please enter your birthday");
  } else {
    let age = getAge ( birthdayValue);
    resultE1.innerText = 'Your age is ${age} ${age > 1 ? "years" : "year"} old' ;
  }
}

function getAge (birthdayValue) {
  let currentDate = new Date ();
  let birthdayDate = new Date (birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if(
     
  )
}