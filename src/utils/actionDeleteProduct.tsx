import { ActionFunctionArgs, redirect } from "react-router-dom"
import { deleteProduct } from "../services/productService"


export async function action({params}: ActionFunctionArgs) {
    

    if(params?.id !== undefined) {
        await deleteProduct(params?.id)
        return redirect('/')
    }
    
    
}