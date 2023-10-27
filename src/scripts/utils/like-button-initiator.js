import RestaurantFavoriteIdb from '../data/favorite-restaurant-idb';
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

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantFavoriteIdb.getRestaurant(id);
    return !!restaurant;
  }

  _renderLike() {
    const container = document.querySelector(this._likeButtonContainerId);
    container.innerHTML = createLikeButtonTemplate();

    const likeButton = container.querySelector('.likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.putRestaurant(this._restaurant);
      this.renderButton();
    });
  }

  _renderLiked() {
    const container = document.querySelector(this._likeButtonContainerId);
    container.innerHTML = createLikedButtonTemplate();

    const likeButton = container.querySelector('.likeButton');
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.deleteRestaurant(this._restaurant.id);
      this.renderButton();
    });
  }
}

export default LikeButtonInitiator;
