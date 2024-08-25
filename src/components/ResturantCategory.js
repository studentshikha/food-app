import ItemList from "./ItemList";
import { useState } from "react";
const ResturantCategory = ({data})=>{
  
    
    const [showItems, setShowItems] = useState(true);

    const handleItem =()=>{
       setShowItems(!showItems) ;
    }

    return(
        <div>
             {/* accordian header */}
            <div>   
         <h1 onClick={handleItem}><span>{data.title} ({data.itemCards.length})</span></h1>

           {/* accordian body */}
         {   showItems && <ItemList items={data.itemCards}/>}
          </div>
        </div>
    )
}
export default ResturantCategory;