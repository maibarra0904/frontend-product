import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import NewProduct from "./views/NewProduct";
import {action as newProductAction} from './utils/actionNewProduct'
import {action as editProductAction} from './utils/actionEditProduct'
import {action as deleteProductAction} from './utils/actionDeleteProduct'
import {action as updateAvailabilityAction} from './utils/actionUpdateAvailability'
import {loader as loaderProducts} from './utils/loaderProducts'
import {loader as loaderEditProduct} from './utils/loaderEditProduct'
import EditProduct from "./views/EditProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            
            { path: '/', element: <Products />, loader: loaderProducts, action: updateAvailabilityAction},
            { path: '/productos/nuevo', element: <NewProduct />, action: newProductAction },
            { path: '/productos/:id/editar', element: <EditProduct />, loader: loaderEditProduct, action: editProductAction },
            { path: '/productos/:id/eliminar', action: deleteProductAction },
            { path: '/products', element: <h1>Products</h1> },
            { path: '/products/:id', element: <h1>Product</h1> },
            { path: '/products/:id/edit', element: <h1>Edit Product</h1> },
            { path: '/*', element: <h1>404</h1> }
        ]
    }
])