import { Product } from "../interfaces/products.interface";
import { createContext } from 'react';
import{ListOfProducts} from '../data/products';

export type productContext = {
    product? :Product[],
    // setProduct :Function;
    // addProduct: Function;
} ;
const InitialProductsList : productContext= {
    product : ListOfProducts,
    // setProduct :Function,
};
export const ProductContext = createContext<productContext>(InitialProductsList);
