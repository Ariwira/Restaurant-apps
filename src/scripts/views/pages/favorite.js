import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { restaurantItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

export default class Favorite {
  static async render() {
    return `
    <div class="favorite-section">
        <h2 tabindex="0"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000" >Restaurant Favoritmu</h2>
        <div id="restaurantList" class="restaurant-list"></div>
    </div>
    `;
  }

  static async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurantList');

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML =
        'Tidak ada restoran favorit yang tersimpan.';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += restaurantItemTemplate(restaurant);
        const likeButton = new LikeButtonInitiator({
          likeButtonContainerId: `#likeButtonContainer_${restaurant.id}`,
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            city: restaurant.city,
            description: restaurant.description,
            pictureId: restaurant.pictureId,
            rating: restaurant.rating,
          },
        });
        likeButton.renderButton();
      });
    }
  }
}
