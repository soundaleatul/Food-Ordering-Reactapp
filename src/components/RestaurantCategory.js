import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems , setShowIndex}) => {

  // const [show , setShow] = useState(true);
    const handleClick =()=>{
          setShowIndex(false)
      //  show ? setShow(false):setShow(true)
    }
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>⬇️</span> 
            
        {/* {show ? <span>⬇️</span> :<ItemList items={data.itemCards} />} */} 
        </div>
        {/* Accordion Body */}

       {showItems && <ItemList items={data.itemCards} />} 
      </div>
    </div>
  );
};

export default RestaurantCategory;
