import React, { useState } from "react";
import { GlobalStyle } from "./Styles/GobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { UserAuth } from "./User/UserAuth";
import { UserToken } from "./Data/UserData"
import { UserProfile } from "./User/UserProfile";
import LogIn from "./login/reg/login";
import SignUp from "./login/reg/registration";
import LogOut from "./login/reg/logout";
function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });

  return (
    <>      
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Banner />
      { /** UserToken ? <UserProfile /> : <UserAuth /> **/}
      {/* <UserAuth /> */}
      <LogIn></LogIn>
      <SignUp></SignUp>
      <LogOut/>
      {JSON.parse(localStorage.getItem('user')) == "zaposleni" && 
        <Order {...orders} {...openFood} /> }
       {JSON.parse(localStorage.getItem('user')) == "kupac" &&  
      <Menu {...openFood} /> }
      {/* } */}
      {/* <Order {...orders} {...openFood} /> */}
      {/* <Menu {...openFood} /> */}
    </>
  );
}

export default App;
