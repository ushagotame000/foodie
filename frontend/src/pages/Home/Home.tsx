import React from "react";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu.tsx/ExploreMenu";
import DisplayItem from "../../component/ExploreMenu.tsx/DisplayItem";

const home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <DisplayItem />
    </div>
  );
};

export default home;
