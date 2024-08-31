import { useLoaderData, useParams } from "react-router-dom"
import { Product } from "../../interfaces/product.interface"

const Product = () => {
	const { id } = useParams()
	const data = useLoaderData() as Product
	return <div>Product-{data.name}</div>
}

export default Product
