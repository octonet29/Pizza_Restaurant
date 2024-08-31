import cn from "classnames"
import { forwardRef } from "react"
import { IInputProps } from "./Input.props"
import styles from "./Input.module.css"

const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
	{ isValid = true, className, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			className={cn(styles["input"], className, {
				[styles["invalid"]]: isValid,
			})}
			{...props}
		/>
	)
})

export default Input
