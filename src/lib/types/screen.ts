import { Member } from "./member";
import { Product } from "./product";

/**    REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;

}
/** HomePage**/
export interface HomePageState {
  trendingProducts: Product[];
}

/** ProductPage**/
export interface ProductsPageState {
store: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/** OrdersPage**/
