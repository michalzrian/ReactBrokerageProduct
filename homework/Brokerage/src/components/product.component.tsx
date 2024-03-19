import { ProductContext } from "../context/products.context";
import BrokerageProduct from '../components/brokerageProduct.component';
import { useContext } from 'react';
export const AddProduct = () => {

    const productContext = useContext(ProductContext);
    return (
    <div>
        <h1>All products</h1>
        <ul>
            {productContext.product?.map(p => (
            <li>{p.id}
            <BrokerageProduct product = {p}>for details click here</BrokerageProduct>
            </li>
            )
            )}
        </ul>
    </div>
)
}
export default AddProduct;