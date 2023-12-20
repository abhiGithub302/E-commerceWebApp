import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";


function Home() {
    return ( 
        <div>
            <Navbar></Navbar>
            <ProductList></ProductList>
            
        </div>
     );
}

export default Home;