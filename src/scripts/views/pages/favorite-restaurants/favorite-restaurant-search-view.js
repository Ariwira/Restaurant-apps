import { restaurantItemTemplate } from '../../templates/template-creator';
import LikeButtonInitiator from '../../../utils/like-button-initiator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="fav-restaurant__title">
        <h2 tabindex="0">Restaurant Favoritmu</h2>
      </div>
      <div class="search-bar">
        <input id="query" type="text" placeholder="cari..." tabindex="0">
      </div>
      <div id="restaurant-search-container">
      <div id="restaurants" class="restaurant-list">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(restaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    const restaurantContainer = document.getElementById('restaurants');
    restaurantContainer.innerHTML = html;

    restaurants.forEach((restaurant) => {
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

    restaurantContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
