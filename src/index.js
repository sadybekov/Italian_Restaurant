import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const sortedMenu = [];
const startersItems = [];
const pastaItems = [];
const pizzaItems = [];

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

menuSorting(menuItems);

console.log("sorted");
console.log(sortedMenu);
