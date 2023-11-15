import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

class LikeButtonInitiator {
  constructor({ likeButtonContainerId, restaurant }) {
    this._likeButtonContainerId = likeButtonContainerId;
    this._restaurant = restaurant;
  }

  async renderButton() {
    const { id } = this._restaurant;
    const container = document.querySelector(this._likeButtonContainerId);

    if (!container) {
      console.error(
        `Element with ID ${this._likeButtonContainerId} not found in the DOM.`,
      );
      return;
    }

    if (await this._isRestaurantExist(id)) {
      this._renderLiked(container);
    } else {
      this._renderLike(container);
    }
  }

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  _renderLike(container) {
    container.innerHTML = createLikeButtonTemplate();

    const likeButton = container.querySelector('.likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this.renderButton();
    });
  }

  _renderLiked(container) {
    container.innerHTML = createLikedButtonTemplate();

    const likeButton = container.querySelector('.likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this.renderButton();
    });
  }
}

export default LikeButtonInitiator;
