import React from 'react';

import {  Route, Switch, useLocation } from 'react-router-dom';
import { HomePage } from './app/screens/homePage';
import { ProductsPage } from './app/screens/productsPage';
import { OrdersPage } from './app/screens/ordersPage';
import { UserPage } from './app/screens/userPage';
import { OtherNavbar } from './app/components/headers/OtherNavbar';
import { HomeNavbar } from './app/components/headers/HomeNavbar';
import { Footer } from './app/components/footer';
import '../css/app.css';



function App() {
  const location = useLocation();
  return (
  <>
 
  {location.pathname === '/' ? <HomeNavbar/> : <OtherNavbar/>}
  <Switch>
    <Route path="/products">
      <ProductsPage />
    </Route>
    <Route path="/orders">
      <OrdersPage />
    </Route>
    <Route path="/member-page">
      <UserPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
  <Footer/>
</>
  );


}
export default App;
