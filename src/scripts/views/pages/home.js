import RestaurantSource from '../../data/restaurant-resource';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { restaurantItemTemplate } from '../templates/template-creator';

export default class Home {
  static render() {
    return `<section class="hero" role="img" aria-label="hero image">
    <div class="hero-text">
      <h2 class="animate__animated animate__fadeInUp animate__delay-1s">
        Welcome to TasteJourney
      </h2>
      <p class="animate__animated animate__zoomIn animate__delay-2s">
        Your Premier Destination to Explore Global Culinary Delights.
      </p>
    </div>
  </section>
  <section class="main-section">
    <h2
      id="main-content"
      tabindex="0"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
    >
      Explore Restaurant
    </h2>
    <div id="restaurantList" class="restaurant-list"></div>
    </section>`;
  }

  static async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantList = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      console.log(restaurant.id);
      restaurantList.innerHTML += restaurantItemTemplate(restaurant);

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
