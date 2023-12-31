/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchPresenter from './favorite-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from './favorite-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorite-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
    new FavoriteRestaurantSearchPresenter({
      view,
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Favorite;
