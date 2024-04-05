import React from "react";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu.tsx/ExploreMenu";
import DisplayItem from "../../component/ExploreMenu.tsx/DisplayItem";
import Footer from "../../component/Footer/Footer";
const home = () => {
  return (
    <>
      <div>
        <Header />
        <ExploreMenu />
        <DisplayItem />
        <Footer />
      </div>
    </>
  );
};

export default home;
