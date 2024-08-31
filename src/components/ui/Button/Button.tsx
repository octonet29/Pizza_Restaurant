import { IButton } from "./Button.props"
import styles from "./Button.module.css"
import cn from "classnames"

const Button = ({
	children,
	appearance = "small",
	className,
	color,
	...props
}: IButton) => {
	return (
		<button
			className={cn(styles["button"], styles["accent"], className, {
				[styles["small"]]: appearance === "small",
				[styles["big"]]: appearance === "big",
			})}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
