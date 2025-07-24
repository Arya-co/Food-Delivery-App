import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../components/Context/StoreContext';  // Correct relative path
import FoodItem from '../FoodItem/FoodItem';  // Import FoodItem if missing

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);  // Accessing context properly

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {console.log(category,item.category);}
          if(category === "All"|| category === item.category){
            return <FoodItem key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
          }

        }
      
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
