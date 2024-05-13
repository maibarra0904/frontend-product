import { ActionFunctionArgs } from "react-router-dom"
import { updateProductAvailability } from "../services/productService"

export async function action({request}: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    await updateProductAvailability(+data.id)
    return {}
}