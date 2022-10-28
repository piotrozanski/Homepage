console.log("Siema");

let section__buttonElement = document.querySelector(".section__button");
let section__aboutMeElement = document.querySelector(".section__aboutMe");
let section__interestedTitleElement = document.querySelector(".section__interestedTitle");

section__buttonElement.addEventListener("click", () => {
    section__interestedTitleElement.remove();
    section__aboutMeElement.remove();
});

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
let section__aboutMe = document.querySelector(".section__aboutMe");
let section__interestedTitle = document.querySelector(".section__interestedTitle");
let navigation__link = document.querySelectorAll(".navigation__link");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    section__aboutMe.classList.toggle("orange");
    section__interestedTitle.classList.toggle("orange");
    navigation__link.forEach(element => {
        element.classList.toggle("orange")
    })
   
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});
