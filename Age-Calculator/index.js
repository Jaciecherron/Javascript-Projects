let btnE1 = document.getElementById("btn");
let birthdayE1 = document.getElementById("birthday");
let resultEl = document.getElementById("result");

function calculateAge(){
  let birthdayValue = birthdayE1.value;
  if (birthdayValue === "") {
    alert ("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge (birthdayValue) {
  let currentDate = new Date ();
  let birthdayDate = new Date (birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();

  if(
    month < 0 || 
    (month === 0 && currentDate.getDate() < birthdayDate.getDate()) 
  ) {
    age --;
  }

  return age;

}

btnE1.addEventListener("click", calculateAge);

