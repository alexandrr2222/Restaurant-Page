import "../css/about.css";
import image1 from "../images/aboutImg1.jpeg";
import image2 from "../images/aboutImg2.jpg";
import {DOM_creator} from './helperFunctions.js';
export function initAbout() {
    const content = document.querySelector("#content");
    DOM_creator("div", content, "contentBoxAbout");
    const contentBoxAbout = document.querySelector(".contentBoxAbout");
    DOM_creator("section", contentBoxAbout, "aboutCont");
    const aboutCont = document.querySelector(".aboutCont");
    DOM_creator("h2", aboutCont, "aboutHead", null, null, "About Us")
    DOM_creator("div", aboutCont, "aboutText")
    const aboutText = document.querySelector(".aboutText");
    const aboutTexts = ["At Aurelia Dining, the focus is on refined simplicity and precision. Built around seasonal ingredients and disciplined technique, the kitchen emphasizes balance, clean flavors, controlled textures, and careful presentation.", "The menu evolves continuously, drawing from Mediterranean foundations while incorporating modern methods. Each dish is constructed to highlight its core components without excess, supported by a curated selection of wines and understated service.", "The space reflects the same philosophy: restrained design, warm tones, and an environment intended to keep attention on the food and the company at the table. Aurelia Dining operates with a clear objective—consistency, clarity, and a dining experience that is deliberate rather than excessive."];
    aboutTexts.forEach(text => {
        DOM_creator("p", aboutText, null, null, null, text)
    });


    
    const aboutImageCont = document.createElement("div");
        aboutImageCont.classList.add("aboutImageCont");
        contentBoxAbout.append(aboutImageCont)
        const aboutImg1 = document.createElement("img");
            aboutImg1.classList.add("aboutImg1")
            aboutImg1.src = image1
            aboutImg1.alt = "Restaurant interior"
            aboutImageCont.append(aboutImg1)
        const aboutImg2 = document.createElement("img");
            aboutImg2.classList.add("aboutImg2")
            aboutImg2.src = image2
            aboutImg2.alt = "Restaurant food"
            aboutImageCont.append(aboutImg2)

    const contactCont = document.createElement("section");
        contactCont.classList.add("contactCont");
        contentBoxAbout.append(contactCont)
        const contactHead = document.createElement("h2");
            contactHead.classList.add("contactHead");
            contactCont.append(contactHead)
            contactHead.textContent = "Contact"
        const contactText = document.createElement("address");
            contactText.classList.add("contactText");
            contactCont.append(contactText)
        const strong = document.createElement("strong")
            strong.textContent = "Aurelia Dining"
            contactText.append(strong)
        const address1 = document.createElement("div")
            address1.textContent = "17 Lysandrou Street"
            contactText.append(address1)
        const address2 = document.createElement("div")
            address2.textContent = "Athens 105 58, Greece"
            contactText.append(address2)
            contactText.appendChild(document.createElement('br'))
        const address4 = document.createElement("div")
            address4.textContent = "Phone: "
            contactText.append(address4)
            const address4a = document.createElement("a")
                address4a.href = "tel:+302104567821"
                address4a.textContent = "+30 21 0456 7821"
                address4.append(address4a)
        const address5 = document.createElement("div")
            address5.textContent = "Email: "
            contactText.append(address5)
            const address5a = document.createElement("a")
                address5a.href = "mailto:reservations@aureliadining.gr"
                address5a.textContent = "reservations@aureliadining.gr"
                address5.append(address5a)
                contactText.appendChild(document.createElement('br'))
        const address6 = document.createElement("div")
            address6.textContent = "Hours:"
            contactText.append(address6)
        const address7 = document.createElement("div")
            address7.textContent = "Monday - Thursday: 18:00 - 23:30"
            contactText.append(address7)
        const address8 = document.createElement("div")
            address8.textContent = "Friday - Sunday: 17:30 - 00:30"
            contactText.append(address8)


    const aboutImgBottom = document.createElement("img");
        aboutImgBottom.classList.add("aboutImgBottom");
        aboutImgBottom.src = image2
        aboutImgBottom.alt = "Restaurant food"
        contentBoxAbout.append(aboutImgBottom)
}