import ProductCard from "../../../components/ProductCard/ProductCard"
import { IHomeListProps } from "./HomeList.props"
import styles from "./HomeList.module.css"

const HomeList = ({ products }: IHomeListProps) => {
	return (
		<div className={styles["wrapper"]}>
			{products.map((product) => {
				return (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.ingredients.join(", ")}
						rating={product.rating}
						price={product.price}
						image={product.image}
					/>
				)
			})}
		</div>
	)
}

export default HomeList
