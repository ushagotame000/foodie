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
      <div className="food-item mt-5 ">
        <img src={image} alt={name} /> {/* Use the 'image' prop directly */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img
            // src={require("../../assets/rating_starts.png").default}
            src="rating_starts.png"
            alt="Rating Stars"
          />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
