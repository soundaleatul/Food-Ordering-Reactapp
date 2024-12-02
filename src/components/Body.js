import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state Variable -super powerful variable
  const [ListOfResturant, setListOfResturant] = useState([]);

  const [filterRestaurent, setFilterRestaurent] = useState([]);

  const [SearchText, setSearchTet] = useState([]);

  useEffect(() => {
    // fetchData();
    setListOfResturant(resList);
    setFilterRestaurent(resList);
    console.log(resList);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7829103&lng=79.027659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    console.log(ListOfResturant);

    setListOfResturant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurent(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>Please check your internet connection!!!</h1>;

  // Conditional Rendering(1st option of rendering)
  // if(ListOfResturant.length ==0)
  // {
  //     return<Shimmer/>
  // }

  // Second option of rendering
  return ListOfResturant.length == 0 ? (
    <Shimmer />
  ) : (
    <div
      className="body "
      style={{
        // backgroundImage: url(
        //   "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        // ),
        // backgroundImage:new URL("https://as1.ftcdn.net/v2/jpg/02/05/87/60/1000_F_205876015_hYYs7ugqoU8QAobSS3TbnGQ92qyS5gEc.jpg"),
        backgroundColor:"#f0f0f0",
        height: "auto",
        width:"auto",
        backgroundPosition: "center",
      }}
    >
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="search-box px-2  border border-solid border-gray-400 rounded-lg w-96"
            value={SearchText}
            onChange={(e) => {
              setSearchTet(e.target.value);
            }}
          />
          <button
            className="btn-search px-4  bg-green-100 hover:bg-green-200 m-4 rounded-lg border border-gray-400"
            onClick={() => {
              const filtreRes = ListOfResturant.filter((resData) =>
                resData.info.name
                  .toLowerCase()
                  .includes(SearchText.toLowerCase())
              );
              setFilterRestaurent(filtreRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex m-4 p-4">
          <button
            className="filter-btn px-4 bg-blue-50 m-4 rounded-2xl font-medium hover:bg-green-200 border border-gray-400"
            onClick={() => {
              // Filter Logic here on top resturant
              const filterList = ListOfResturant.filter(
                (res) => res.info.avgRating >= 4.3
              );
              setFilterRestaurent(filterList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {/* 
            //itretrate restaurent list using map */}
        {filterRestaurent.map((restaurant) => (
          <Link
            Key={restaurant.info.id}
            to={"/restaurent/" + restaurant.info.id}
          >
            <ResturantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
