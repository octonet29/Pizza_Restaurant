import { IHTag } from "./HTag.props"
import styles from "./HTag.module.css"

const HTag = ({ children, className, ...props }: IHTag) => {
	return (
		<h1 {...props} className={styles["HTag"]}>
			{children}
		</h1>
	)
}

export default HTag
