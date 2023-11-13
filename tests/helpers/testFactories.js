/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (Restaurant) => {
  const likeButtonInitiator = new LikeButtonInitiator({
    likeButtonContainerId: '#likeButtonContainer',
    restaurant: Restaurant,
  });
  await likeButtonInitiator.renderButton();

  return likeButtonInitiator;
};

export { createLikeButtonPresenterWithRestaurant };
