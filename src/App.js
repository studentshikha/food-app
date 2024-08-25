import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import { Outlet } from "react-router-dom"
import ResturantMenu from "./components/ResturantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const App = ()=>{

    return (
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
}

export const appRouter = createBrowserRouter([
    {
           path : "/",
           element : <App/>,
           children:[
    {
            path : "/", 
            element : <Body/>
    },
     {
            path : "/about", 
            element : <About/>
    },
    {
          path : "/contact",
          element : <Contact/>
    },
    {
        path : "/cart",
          element : <Cart/>

    },
    {
        path : "/resturants/:resId",
        element : <ResturantMenu/>
    },

],
           errorElement : <Error/>
    }
   
]);



export default App;