

import ResturantCart from "./ResturantCart";

import { useState , useEffect } from "react";



const Body = () => {

  //  this is a local state variable
  // this means is a normal js variable let listofresturants= []
  // after api call listOfResturant = [{},{}......]
  const [listOfResturants, setListOfResturants] = useState([]);
     
  useEffect(()=>{
      fetchData()
  },[])

  const fetchData = async() => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();

  // const cards = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  // console.log(cards);

  // console.log(listOfResturants)
  
  setListOfResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

  console.log(listOfResturants);
 }


   return (
     <div className="body">
       <div className="filter">
        <button className="filter-btn"
           onClick={()=>{
            // filter logic here
            
            let filtered = listOfResturants.filter(res=>res.info.avgRating>4.5)
            setListOfResturants(filtered);
          
           }}
        >top resturants</button>
       </div>

       <div className="res-container">
         {listOfResturants.map((resturant) => (
           <ResturantCart key={resturant.info.id} resData={resturant} />
         )) 
         }
 
         {/* <ResturantCart resData = {resObj[0]} />
              <ResturantCart resData = {resObj[1]} />
               <ResturantCart resData ={resObj[2]} />
              <ResturantCart resData = {resObj[3]} />
              <ResturantCart resData = {resObj[4]} />
              <ResturantCart resData = {resObj[5]} />
              <ResturantCart resData = {resObj[6]} />
              <ResturantCart resData = {resObj[7]} />
              <ResturantCart resData = {resObj[8]} />  */}
       </div>
     </div>
   );
 };
 

 export default Body;