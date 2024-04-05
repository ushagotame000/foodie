// import React from "react";

// const FoodItem = ({ id, name, price, description, image }) => {
//   return (
//     <div>
//       <div className="food-item">
//         <div className="food-item-img-container">
//           <img className="food-item-image" src="{image" alt="" />
//         </div>
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_stars} />
//         </div>

//         <p className="food-item-desc">{description} </p>
//         <p className="food-price">Rs.{price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;

import React from "react";

// Define the types of props explicitly
interface FoodItemProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const FoodItem: React.FC<FoodItemProps> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  return (
    <div>
      <div className="food-item w-auto m-auto  ease-in-out rounded-md hover:opacity-75 ">
        <img src={image} alt={name} className="w-auto  border-spacing-1" />{" "}
        {/* Use the 'image' prop directly */}
        <div className="food-item-name-rating flex jus items-center mt-5 ">
          <p className="text-2xl font-md font-mono">{name}</p>
          <img
            className="w-20"
            // src={require("../../assets/rating_starts.png").default}
            src="rating_starts.png"
            alt="Rating Stars"
          />
        </div>
        <p className="food-item-desc text-gray-500 text-sm ">{description}</p>
        <p className="food-item-price text-orange-500 font-bold mt-3 mb-0 text-lg">
          Rs.{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
