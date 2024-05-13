import { Form, Link, useFetcher, useLoaderData } from "react-router-dom"
import { Product } from "../types"
import formatCurrency from "../utils/formatCurrency"

const ProductDetails = () => {

  const products = useLoaderData() as Product[]

  const fetcher = useFetcher()

  console.log(products)

  return (
    <>
      {
        products.map(product => (
          <tr key={product.id} className="border-b ">
            <td className="p-3 text-lg text-gray-800">
              {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
              {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
              <fetcher.Form method="POST">
                <button
                  type="submit"
                  name="id"
                  value={product?.id}
                  className={`${product?.availability ? 'text-black': 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-gray-200 hover:cursor-pointer `}
                >
                  {product?.availability ? 'Disponible' : 'No Disponible'}
                </button>
              </fetcher.Form>
              
            </td>
            <td className="p-3 text-lg text-gray-800 flex justify-center items-center">
              <div className="flex gap-2 items-center">
                <Link 
                  to={`/productos/${product.id}/editar`}
                  state={product}
                  className="bg-indigo-600 text-white rounded-lg w-24 p-2 m-2 uppercase font-bold text-xs text-center"
                >Editar</Link>
              </div>
              <Form
                className=" w-24"
                method="POST"
                action={`productos/${product.id}/eliminar`}
                onSubmit={(e) => {
                  if(!confirm('Eliminar?')) {
                    e.preventDefault()
                  }
                }}
              >
                <input
                  type="submit"
                  value="Eliminar"
                  className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover: cursor-pointer"
                />
              </Form>
            </td>
          </tr>
        ))
      }

    </>
  )
}

export default ProductDetails