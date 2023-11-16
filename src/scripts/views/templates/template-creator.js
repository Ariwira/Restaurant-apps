import CONFIG from '../../globals/config';

export function restaurantItemTemplate(restaurant) {
  return `
  <div class="restaurant-item" tabindex="0">
<div class="card" tabindex="0" >
    <div class="container-img">
        <img class="restaurant-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL}${restaurant.pictureId}" alt="${restaurant.name}"  width="360" height="270">
    </div>
    <div class="rating">
        <span class='bx bxs-star star-icon' aria-label="rating"></span>
        <p style="display: inline">${restaurant.rating}</p>
    </div>
    <div class="card-text">
        <h3 class="restaurant__title">${restaurant.name}</h3>
        <span class="city">, ${restaurant.city}</span>
        <p class="text-desc">${restaurant.description}</p>
    </div>
    <div class="group-button"> 
    <a href="#/detail/${restaurant.id}" class="detail-button" >Detail</a>
    <div id="likeButtonContainer_${restaurant.id}" class="like-button"></div>
    </div>
</div>
</div>`;
}

export function restaurantDetailTemplate(restaurant) {
  return `  <img class="restaurant__poster" src="${
    CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
  }" alt="${restaurant.name}" width="1210" height="810"/>
        <div class="title-like-container">
            <h3 class="restaurant__title" tabindex="0">${restaurant.name}</h3>
            <div id="likeButtonContainer"></div>
        </div>
        <div class="restaurant__overview">
            <h4 tabindex="0">Deskripsi</h4>
            <p tabindex="0">${restaurant.description}</p>
        </div>
        <div class="restaurant__info">
        <div class="resto-info">
            <h4 tabindex="0">Informasi</h4>
            <p tabindex="0">Alamat: ${restaurant.address}, Kota ${
    restaurant.city
  }</p>
  </div>
  <div class="resto-menu">
  <h4>Menu</h4>
  <div class="makanan-minuman">
                <div class="makanan" tabindex="0">
                    <h5 tabindex="0">Makanan</h5>
                    <ul class="foods">${restaurant.menus.foods
                      .map((food) => `<li tabindex="0">${food.name}</li>`)
                      .join('')} </ul>
                </div>
                <div class="minuman" tabindex="0">
                    <h5 tabindex="0">Minuman</h5>
                    <ul class="drinks">${restaurant.menus.drinks
                      .map((drink) => `<li tabindex="0">${drink.name}</li>`)
                      .join('')} </ul>
                </div>
                </div>    
            </div>
            <div class="resto-review" tabindex="0">
                <h4>Ulasan</h4>
                <ul>${restaurant.customerReviews
                  .slice(0, 7)
                  .map(
                    (review) => `
                    <h6>${review.name}</h6>
                    <p>${review.review}</p>
                    <span></span>
                    `,
                  )
                  .join('')}
                </ul>
            </div>
        </div>
        `;
}

export function createLikeButtonTemplate() {
  return `
    <button aria-label="like this restaurant" id="likeButton" class="like likeButton">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;
}

export function createLikedButtonTemplate() {
  return `
  <button aria-label="unlike this restaurant" id="likeButton" class="like likeButton">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;
}

const loader = {
  show() {
    return `
  <div class="box">
   <div class="loader"></div>
   </div>`;
  },
  hide() {
    document.querySelector('.box').remove();
  },
};

export { loader };
