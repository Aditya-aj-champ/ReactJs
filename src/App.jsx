// import React from "react";
import Header from "./Components/header/Header";
import Center from "./Components/center/Center";
import Footer from "./Components/footer/Footer";
import Category from "./Components/category/Category";
import Carousel from "./Components/carousel/Carousel";
// import List from "./Components/list items/List";
// import Object from "./Components/objectDataList/Object";
import ProductData from "./Components/products/ProductData";
import UserList from "./Components/jsonDataRed/UserList";
import FunctionalPropes from "./Components/propes/FunctionalPropes";
import ClassPropes from "./Components/propes/ClassPropes";

function App() {
  return (
    <>
      <Header />
      {/* <FunctionalPropes name="Aditya" msg="Good Evening" /> */}
      <Category />
      <Carousel />
      {/* <List />
      <Object /> */}
      <ProductData />
      <UserList />

      <ClassPropes name="Adi" msg="Good Morning. this is class propes " />
      <Center />
      <Footer />
    </>
  );
}

export default App;
