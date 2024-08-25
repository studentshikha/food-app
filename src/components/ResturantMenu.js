import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";


const ResturantMenu=()=>{
    const [menu, setMenu]= useState("");
    // const {resId} = useParams();
    const {resId}= useParams();
// console.log(Params)
    
    useEffect(()=>{
       fetchMenu()
    },[]);

    const fetchMenu = async ()=>{
         const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
         )
         const json = await data.json();
         setMenu(json.data);
         console.log(json.data);
        //    console.log(menu.cards[2].card.card.info.name);
        //   console.log(menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemsCards);
        // console.log(menu.cards[2].card.card.info.sla.slaString);      
    }
  
     const {name,avgRating,areaName, costForTwoMessage,cuisines,totalRatingsString} = menu?.cards?.[2]?.card?.card?.info || {};

      const {deliveryTime} = menu?.cards?.[2]?.card?.card?.info?.sla?.slaString || {};

     const {itemCards, title} =  menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};


     const categories =   menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )
    console.log(categories);
 

    return(

       <div>
                  <div className="menu"> 
             <h1>{name}</h1>  
             <p>{avgRating}</p> 
            <p>{areaName}</p>  
           <p>{costForTwoMessage}</p>  
              <p>{cuisines}</p>  
            <p>{totalRatingsString}</p>  
            <p>{deliveryTime}</p>   
                </div>  
                {/* <div>hello</div> */}
                <h1>menu</h1>
                {/* categories accordial */}

                {
                
                    categories?.map((category)=><ResturantCategory data={category.card?.card}/> )
                 
                }
               

        </div>
    )
}
export default ResturantMenu;


// // Assorted Sweets

// const {itemCards1 , title1} = menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card || {};
// {console.log(itemCards1)};

// // // Sweets

// const {itemCards2 , title2}=  menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card || {};
// {console.log(itemCards2)}



// // // Bengali Sweets
// const {itemCards3, title3}=  menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card?.card || {};
// {console.log(itemCards3)}

// // Namkeen
// const {itemsCards4}=  menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card;
// {console.log(itemsCards4)}

// // Sticks
// const {itemsCards5}=  menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[7].card.card;
// {console.log(itemsCards5)}

// // Cookies And Biscuits
// const {itemsCards6}=  menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[8].card.card;
// {console.log(itemsCards6)}


 {/* <div>     
                 <h2>{title1}</h2>     
       <ul className="menu">
     {           
         itemCards1?.map((item)=>( <li>{item.card.info.name}- {item.card.info.price/100} -{item.card.info.category} -
         {item.card.info.description}</li>
                    
 ))
     } 
      </ul> 

     </div>  
 
     <div>     
                 <h2>{title2}</h2>     
       <ul className="menu">
     {           
         itemCards2?.map((item)=>( <li>{item.card.info.name}- {item.card.info.price/100} -{item.card.info.category} -
         {item.card.info.description}</li>
                    
 ))
     } 
      </ul> 

     </div>  

  
     <div>     
                 <h2>{title3}</h2>     
       <ul className="menu">
     {           
         itemCards3?.map((item)=>( <li>{item.card.info.name}- {item.card.info.price/100} -{item.card.info.category} -
         {item.card.info.description}</li>
                    
 ))
     } 
      </ul> 

     </div>   */}

       {/* <div className="menu">    
                 <h2>{title}</h2>     
       <ul className="">
     {           
         itemCards?.map((item)=>( <li>{item.card.info.name}-{item.card.info.price/100 || item.card.info.defaultPrice/100} -{item.card.info.ratings.aggregatedRating.rating }-
         {item.card.info.description}</li>
                      
 ))
     } 
      </ul> 
      </div>  */}