import RestaurantPhoto from "../images/home_bg.jpeg";
import "../css/home.css";
import {DOM_creator} from './helperFunctions.js';

export function initHome() {
    const content = document.querySelector("#content");
    DOM_creator("img", content, "homeBG", RestaurantPhoto, "Restaurant interior");
    DOM_creator("div", content, "contentBox")
    const contentBox = document.querySelector(".contentBox")
    DOM_creator("div", contentBox, "blur")
    DOM_creator("div", contentBox, "welcomeHero")
    const welcomeHero = document.querySelector(".welcomeHero")
    DOM_creator("span", welcomeHero, "welcomeTo", null, null, "Welcome to")
    DOM_creator("span", welcomeHero, "welcomeName", null, null, "Aurelia Dining")
}
