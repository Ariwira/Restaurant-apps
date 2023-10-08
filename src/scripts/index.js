import "regenerator-runtime"; /* for async await transpile */
import "../../node_modules/boxicons/css/boxicons.min.css";
import "../styles/main.scss";
import Navigation from "./nav";
import restaurants from "../public/data/DATA.json";
import RestaurantList from "./main";

const restaurantList = new RestaurantList();
restaurantList.loadRestaurants(restaurants);

restaurantList.showRestaurant();
const readMoreButtons = document.querySelectorAll(".read-more-button");
readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    restaurantList.readMore(button);
  });
});
