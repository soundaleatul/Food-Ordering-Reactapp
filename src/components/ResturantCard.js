import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData?.info;

  return (
    // <div className="res-card m-2 p-4 w-[200px] h-[410px] bg-yellow-600 hover:bg-yellow-700  text-white  cursor-pointer transition-transform hover:scale-[1.1]  ">
    <div className="res-card m-2 p-4 w-[200px] h-[410px] bg-white hover:bg-slate-200 shadow-md text-black  cursor-pointer transition-transform hover:scale-[1.1]  ">
      <img
        className="res-logo rounded-xl w-40 h-40"
        src={CDN_URL + resData.info.cloudinaryImageId}
      ></img>
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating == null ? "0" : avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
