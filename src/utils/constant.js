export const BASE_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const PRODUCT_IMAGE = (id) => {
  const img = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${id}`;
  return img;
};

export const APP_LOGO =
  "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png";

export const ROUNDED_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Featured_Star_green.svg/1200px-Featured_Star_green.svg.png";

export const PRODUCT_DETAILS_API = (resturentId) => {
  const ressult = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resturentId}`;
  return ressult;
};

export const TOPRESTURENTAPI = (res) => {
  const result = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&collection=${res.id}&tags=layout_CCS_${res.name}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
  return result;
};

export const DOWN_ARROW =
  "https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png";
export const UP_ARROW =
  "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png";

export const polularCusines =
  "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.96340&lng=77.58550";

export const searchApi = (text) => {
  const result = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.96340&lng=77.58550&str=${text}`;
  return result;
};
