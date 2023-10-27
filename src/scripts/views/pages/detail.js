import RestaurantSource from '../../data/restaurant-resource';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  loader,
  restaurantDetailTemplate,
} from '../templates/template-creator';

class Detail {
  static async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        ${loader.show()}
      `;
  }

  static async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);
    const likeButton = new LikeButtonInitiator({
      likeButtonContainerId: '#likeButtonContainer',
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
    loader.hide();
  }
}

export default Detail;
