export const BASE_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const PRODUCT_IMAGE = (id) => {
  const img = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${id}`;
  return img;
};

export const APP_LOGO =
  "https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg";

export const ROUNDED_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Featured_Star_green.svg/1200px-Featured_Star_green.svg.png";

export const PRODUCT_DETAILS_API = (resturentId) => {
  const ressult = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resturentId}`;
  return ressult;
};
