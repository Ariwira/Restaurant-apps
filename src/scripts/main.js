import restaurants from "../public/data/DATA.json";

function showRestaurant(restaurants) {
  const restaurantListElement = document.querySelector("#restaurantList");
  restaurantListElement.innerHTML = "";

  restaurants.restaurants.forEach((restaurant) => {
    restaurantListElement.innerHTML += `
        <div class="restaurant-item" tabindex="0">
          <div class="card">
            <img class="restaurant-img" src=${restaurant.pictureId} alt="${restaurant.name}">
            <div class="rating">
              <span class='bx bxs-star star-icon' aria-label="rating"></span>
              <p style= "display: inline">${restaurant.rating}</p>
            </div>
            <div class="card-text">
              <h3>${restaurant.name}</h3>
              <span class= "city">, ${restaurant.city}</span>
              <p class="text-desc">${restaurant.description}</p>
              </div>
              <button class="read-more-button" >Read More</button>
          </div>
        </div>`;
  });

  let noOfCharac = 150;
  let contents = document.querySelectorAll(".text-desc");
  contents.forEach((content) => {
    if (content.textContent.length < noOfCharac) {
      content.nextElementSibling.style.display = "none";
    } else {
      let displayText = content.textContent.slice(0, noOfCharac);
      let moreText = content.textContent.slice(noOfCharac);
      content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
  });
}

function readMore(btn) {
  let card = btn.parentElement;
  card.querySelector(".dots").classList.toggle("hide");
  card.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
}

export default function main() {
  showRestaurant(restaurants);
  const readMoreButtons = document.querySelectorAll(".read-more-button");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      readMore(button);
    });
  });
}
