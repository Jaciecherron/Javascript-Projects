let testimonials = [
  {
    name: "Cherise G",
    photoURL:
      "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Constatine V",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

let imgE1 = document.querySelector("img");
let textE1 = document.querySelector(".text");
let usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  let { name, photoUrl, text } = testimonials[idx];
  imgE1.src = photoUrl;
  textE1.innerText = text;
  usernameE1.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}