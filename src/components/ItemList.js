const ItemList =({items})=>{
    // const data= items[0].card.info.name;
   
        return(
   
         <div>
           {
            items.map((item)=>(
                <div> 
                    <h4><p>{item.card.info.name}</p></h4>
                    <p>{item.card.info.description}</p>
                    <p>{item.card.info.price/100}</p>
                
                </div>

            ))
   }
            
         </div>
     )
    }

export default ItemList;