
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Destination from "./destination/Destination";
import Crew from "./crew/Crew";
import Technology from "./technology/Technology";


const Pages = () => {
    return ( 
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/destination" element={ <Destination /> } />
            <Route path="/crew" element={ <Crew /> } />
            <Route path="/technology" element={ <Technology /> } />
        </Routes>
     );
}
 
export default Pages;
