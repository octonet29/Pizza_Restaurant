import { IBadge } from "./Badge.props"
import cn from "classnames"
import styles from "./Badge.module.css"

const Badge = ({ appearance = "white", children, className }: IBadge) => {
	return (
		<span
			className={cn(styles["white"], styles["primary"], className, {
				[styles["primary"]]: appearance === "primary",
				[styles["white"]]: appearance === "white",
			})}
		>
			{children}
		</span>
	)
}

export default Badge
