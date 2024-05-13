import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { getSingleProduct } from "../services/productService"

export async function loader({ params }: LoaderFunctionArgs) {

    let product;

    if (params?.id !== undefined) {
        try {
            product = await getSingleProduct(params?.id)
            return product
        } catch (error) {
            return redirect('/')
        }

    }

}