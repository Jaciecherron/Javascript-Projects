let tabs = document.querySelector(".tabs");
let btns = document.querySelectorAll(".button");
let articles = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
  btns.forEach(function (btn) {
    btn.classList.remove("live");
  });
e.target.classList.add("live");
articles.forEach(function (article) {
  article.classList.remove("live");
});
let element = document.getElementById(id);
element.classList.add("live");
}
});