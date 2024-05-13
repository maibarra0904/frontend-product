import { Link, Form, useActionData, useLoaderData } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import { Product } from '../types'

const availabilityOptions = [
  { name: 'Disponible', value: true },
  { name: 'No Disponible', value: false }
]


const EditProduct = () => {

  const error = useActionData() || {}
  const product: Product = useLoaderData() as Product;


  const { name, price, availability } = product

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-black text-slate-500'>Editar Producto</h2>
        <Link
          to="/"
          className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
        >
          Volver a Productos
        </Link>

      </div>

      {JSON.stringify(error) !== '{}' && <ErrorMessage>{JSON.stringify(error)}</ErrorMessage>}

      <Form
        className="mt-10"
        method='POST'
        action=''
      >

        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="name"
          >Nombre Producto:</label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
            defaultValue={name}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="price"
          >Precio:</label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
            defaultValue={price}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="availability"
          >Disponibilidad:</label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={availability.toString()}
          >
            {availabilityOptions.map(option => (
              <option key={option.name} value={option.value.toString()}>{option.name}</option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Guardar Cambios"
        />
      </Form>


    </>
  )
}

export default EditProduct