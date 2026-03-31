import "../css/menu.css";
import image1 from "../images/menuImage1.jpeg";
import image2 from "../images/menuImage2.jpg";
export function initMenu() {
    const content = document.querySelector("#content");

    // menuCont
    const menuCont = document.createElement("div");
        menuCont.classList.add("menuCont");
        content.append(menuCont);
    const menuH2 = document.createElement("h2");
        menuH2.textContent = "Aurelia Menu";
        menuCont.append(menuH2);
    const subMenuCont = document.createElement("div");
        subMenuCont.classList.add("subMenuCont");
        menuCont.append(subMenuCont);
    const PCmenuH2 = document.createElement("h2");
        PCmenuH2.textContent = "Aurelia Menu";
        subMenuCont.append(PCmenuH2);


    
    // listCont
    const menuSubtitles = ["Starters", "Mains", "Desserts", "Drinks"];
    const dishNames = ["Burrata with heirloom tomatoes", "Beef carpaccio with parmesan", "Roasted beetroot with citrus", "Grilled seabass with lemon butter", "Braised beef short rib", "Wild mushroom risotto", "Dark chocolate tart", "Vanilla panna cotta", "Lemon sorbet", "Fresh citrus juice", "Espresso", "Sparkling mineral water"];
    const dishDescs = ["Creamy burrata with fresh seasonal tomatoes and basil oil", "Thin raw beef slices with parmesan and capers", "Earthy beetroot balanced with bright citrus and walnuts", "Light grilled fish with rich lemon butter sauce", "Slow-cooked beef in deep red wine reduction", "Creamy risotto with mixed mushrooms and truffle aroma", "Rich chocolate tart finished with flaky sea salt", "Silky cream dessert with berry compote topping", "Refreshing citrus sorbet with fresh mint infusion", "Cold-pressed seasonal citrus blend, lightly sweet and fresh", "Strong Italian-style coffee with deep roasted aroma", "Chilled natural mineral water with fine carbonation"];
    const prices = ["€12", "€14", "€11", "€24", "€28", "€22", "€10", "€9", "€8", "€6", "€3", "€4"];
    const names = [...dishNames];
    const descs = [...dishDescs];
    const priceList = [...prices];

    const listCont = document.createElement("div");
        listCont.classList.add("listCont");
        subMenuCont.append(listCont);
        for(let i = 0; i < 4; i++){
            const dishCont = document.createElement("div");
                dishCont.classList.add("dishCont");
                listCont.append(dishCont);
            const menuSubtitle = document.createElement("h3");
                menuSubtitle.textContent = menuSubtitles[i];
                dishCont.append(menuSubtitle);
            for(let ii = 0; ii < 3; ii++){
                const menuItem = document.createElement("div");
                    menuItem.classList.add("menuItem");
                    dishCont.append(menuItem);
                const dishName = document.createElement("h4");
                    dishName.textContent = names.shift();
                    menuItem.append(dishName);
                const dishDesc = document.createElement("p")
                    dishDesc.textContent = descs.shift();
                    menuItem.append(dishDesc);
                const price = document.createElement("div")
                    price.classList.add("price")
                    price.textContent = priceList.shift();
                    menuItem.append(price);
            }
        }

    // ImgCont
    const imgMenuCont = document.createElement("div");
        imgMenuCont.classList.add("imgMenuCont");
        subMenuCont.append(imgMenuCont);
        const menuImage1 = document.createElement("img");
            menuImage1.src = image1;
            menuImage1.classList.add("menuImage1");
            menuImage1.alt = "Restaurant food";
            imgMenuCont.append(menuImage1);
        const menuImage2 = document.createElement("img");
            menuImage2.src = image2;
            menuImage2.classList.add("menuImage2");
            menuImage2.alt = "Restaurant wine";
            imgMenuCont.append(menuImage2);
}