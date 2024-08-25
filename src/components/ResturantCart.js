import {RESCART_URL} from "../utils/constant";

const ResturantCart = ({ resData }) => {
    //  const {resName , cuision, rating, time } = props;
    const { name, areaName, costForTwo, cuisines, avgRating, cloudinaryImageId } =
      resData?.info;
  
    return (
      <div className="res-cart">
        <img alt="res-cart"
          className="res-image"
          src={  RESCART_URL  
             +
            cloudinaryImageId
          }
        />
  
        <h4>{name}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{}</h4>
      </div>
    );
  };

  export default ResturantCart;