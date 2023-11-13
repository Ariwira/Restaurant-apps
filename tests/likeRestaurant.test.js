import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  // =============================Skenario menyukai restaurant=============================

  it('should show the like button when the restaurant has not been liked before', async () => {
    // Buat presenter dengan restaurant yang sesuai
    const restaurant = { id: 1 };
    await TestFactories.createLikeButtonPresenterWithRestaurant(restaurant);

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('.likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  // ========================Skenario ketika restaurant sudah disukai========================
  it('should not save the restaurant again when it has been liked before', async () => {
    const restaurant = { id: 1 };
    await TestFactories.createLikeButtonPresenterWithRestaurant(restaurant);

    // Simulasikan bahwa film telah disukai sebelumnya
    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    // Simulasikan pengguna menekan tombol suka
    document.querySelector('.likeButton').dispatchEvent(new Event('click'));

    // Pastikan film tidak disimpan kembali
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      restaurant,
    ]);

    // Hapus film dari daftar favorit setelah pengujian
    await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
  });

  it('should not save a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    // Simulasikan pengguna menekan tombol suka
    document.querySelector('.likeButton').dispatchEvent(new Event('click'));

    // Pastikan film tidak disimpan
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
