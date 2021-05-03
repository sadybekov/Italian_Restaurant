import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const sortedMenu = [];
const startersItems = [];
const pastaItems = [];
const pizzaItems = [];

//Sorting

const menuSorting = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].type === "pasta") {
      pastaItems.push(menu[i]);
    } else if (menu[i].type === "starters") {
      startersItems.push(menu[i]);
    } else {
      pizzaItems.push(menu[i]);
    }
  }
  pastaItems.sort((a, b) => a.menuOrder - b.menuOrder);
  startersItems.sort((a, b) => a.menuOrder - b.menuOrder);
  pizzaItems.sort((a, b) => a.menuOrder - b.menuOrder);
  sortedMenu.push(startersItems, pastaItems, pizzaItems);
  return sortedMenu;
};

//Rendering

const renderSection = (id) => {
  const section = document.getElementById(id);
  let menu = null;
  if (id === "starters") {
    menu = sortedMenu[0];
  } else if (id === "pasta") {
    menu = sortedMenu[1];
  } else {
    menu = sortedMenu[2];
  }

  for (let i = 0; i < menu.length; i++) {
    const elementName = document.createElement("h3");
    const contentName = document.createTextNode(`${menu[i].name} `);
    const contentPrice = document.createTextNode(` \\$${menu[i].price}`);

    elementName.appendChild(contentName);
    elementName.appendChild(contentPrice);
    if (menu[i].spicy === true) {
      elementName.classList.add("spicy");
    }

    section.appendChild(elementName);

    const elementDescription = document.createElement("h5");
    const contentDescription = document.createTextNode(
      `${menu[i].description}`
    );
    elementDescription.appendChild(contentDescription);
    section.appendChild(elementDescription);
  }
};

const renderMenu = () => {
  renderSection("starters");
  renderSection("pasta");
  renderSection("pizza");
};

menuSorting(menuItems);
renderMenu();
