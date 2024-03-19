import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { SignUp } from './components/signup.component.tsx';
import { UserContext, userContext } from './context/user.context.tsx';
import { User } from './interfaces/user.interface.ts';
import { Product } from './interfaces/products.interface.ts';
import AddProduct from './components/product.component.tsx';
import  {  productContext, ProductContext } from './context/products.context.tsx';
import { ListOfProducts } from './data/products.ts';
import {SignIn} from './components/signin.component.tsx';

const userData : userContext = {
  user : undefined,
  setUser(user:User){
    this.user = user;
  }
}
// const ProductData = useContext(ProductContext);
// const ProductData : productContext = {
//   product : ListOfProducts,
// }
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  }, {
    path: '/sign-up',
    Component: SignUp,
  },
  {
    path : '/sign-in',
    Component : SignIn,
  },
  {
    path : '/products',
    Component : AddProduct,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <UserContext.Provider value={userData}>
    <ProductContext.Provider value={{product: ListOfProducts}}>
      <RouterProvider router={router} />
    </ProductContext.Provider>
  </UserContext.Provider>
</React.StrictMode>
)
