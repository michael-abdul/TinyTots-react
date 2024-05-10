import { Member } from "./member";
import { Product } from "./product";

/**    REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
}
/** HomePage**/
export interface HomePageState {
  trendingProducts: Product[];
}

/** ProductPage**/

/** OrdersPage**/
