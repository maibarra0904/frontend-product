import { getProducts } from "../services/productService"

export async function loader() {
    const products = await getProducts()
    
    return products
}

