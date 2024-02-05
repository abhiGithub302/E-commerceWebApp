import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/ProductDetails";



function ProductDetailsPage() {
    return ( 
        <div>
            <Navbar></Navbar>
            <ProductDetails></ProductDetails>
            
        </div>
     );
}

export default ProductDetailsPage;