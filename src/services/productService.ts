import { safeParse } from "valibot"
import { DraftProductSchema, Product, ProductSchema } from "../types"
import axios from "axios"

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/productos`
        const {data} = await axios(url)
        
        if (data) {
            return data.data
        } else {
            throw new Error('Hubo un error')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function addProduct(data: {[k:string]: FormDataEntryValue}) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })


        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/productos`
            const {output} = result
            await axios.post(url, output)
            
        } else {
            throw new Error('Datos no validos')
        }

    } catch (error) {
        console.log(error)
    }
}

export async function getSingleProduct(id: string) {

    const {data} = await axios(`${import.meta.env.VITE_API_URL}/api/productos/${id}`)

    return data.data

}

export async function updateProduct(data: {[k:string]: FormDataEntryValue}, id: string) {
    try {
        const result = safeParse(ProductSchema, {
            id: +id,
            name: data.name,
            price: +data.price,
            availability: data.availability === 'true' ? true : false
        })
        
        if(result.success) {
            const {output} = result;

            const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`
            await axios.put(url, output)
        } else {
            throw new Error('Datos no validos')
        }

        

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProduct(id: string) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}

export async function updateProductAvailability (id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`
        await axios.patch(url)
    } catch (error) {
        console.log(error)
    }
}