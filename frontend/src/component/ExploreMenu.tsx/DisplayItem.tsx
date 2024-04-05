// import React from "react";
// import { food_list } from "../../assets/assets";
// import FoodItem from "./FoodItem";
// const DisplayItem = () => {
//   return <div>
// <div className="food-display" id="food-display">
// <h2> Top Dishes near you</h2>
// <div className="food-display-list">
//     {food-listenerCount.map((item,index)=>
//     return <FoodItem key ={index} id={item._id} name={item.name} description={item.description} price=>

//     )}
// </div>

// </div>

//   </div>;
// };

// export default DisplayItem;

import React from "react";
import { food_list } from "../../assets/assets";
import FoodItem from "./FoodItem";

const DisplayItem = () => {
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2 className="font-mono text-2xl font-bold text-gray-900 py-2 pt-2">
          Top Dishes near you
        </h2>
        <div className="food-display-list grid grid-cols-4 gap-y-2 gap-x-2">
          {food_list.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image} // Assuming you have an 'image' property in your food item object
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
