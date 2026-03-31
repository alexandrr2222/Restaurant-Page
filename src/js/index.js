// to do: refactor array slop into objects menu.js and refactor dom slop into helper function

import "../css/reset.css";
import "../css/root.css";
import "../css/header.css";
import {initHome} from './home.js';
import {initMenu} from './menu.js';
import {initAbout} from './about.js';

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");
const content = document.querySelector("#content")


document.addEventListener('DOMContentLoaded', () => {
   initHome();
});
homeButton.addEventListener("click", () => {
   content.replaceChildren();
   document.documentElement.style.setProperty("--afterButton", "#ede6d8");
   document.body.removeAttribute("class");
   document.body.classList.add("home");
   initHome();
})
menuButton.addEventListener("click", () => {
   content.replaceChildren();
   document.documentElement.style.setProperty("--afterButton", "#6B4F3A");
   document.body.removeAttribute("class");
   document.body.classList.add("menu");
   initMenu();
})
aboutButton.addEventListener("click", () => {
   content.replaceChildren();
   document.documentElement.style.setProperty("--afterButton", "#ede6d8");
   document.body.removeAttribute("class");
   document.body.classList.add("about")
   initAbout();
})