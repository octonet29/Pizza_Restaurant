import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"

import { ProductCardProps } from "./ProductCard.props"
const Product = (props: ProductCardProps) => {
	return (
		<Link to={`/product/${props.id}`} className={styles["link"]}>
			<div className={styles["card"]}>
				<div
					className={styles["head"]}
					style={{ background: `url('${props.image}')` }}
				>
					<div className={styles["price"]}>
						{props.price} <span className={styles["currency"]}>m</span>
					</div>
					<button className={styles["add-to-cart"]}>
						<img src="cart-button-icon.svg" alt="add to cart" />
					</button>
					<div className={styles["rating"]}>
						{props.rating}
						<img src="star-icon.svg" alt="rating" />
					</div>
				</div>
				<div className={styles["bottom_product"]}>
					<div className={styles["title"]}>{props.name}</div>
					<div className={styles["description"]}>{props.description}</div>
				</div>
			</div>
		</Link>
	)
}

export default Product
