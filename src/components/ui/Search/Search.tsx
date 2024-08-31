import { forwardRef } from "react"
import styles from "./Search.module.css"
import { ISearchProps } from "./Search.props"
import cn from "classnames"

const Search = forwardRef<HTMLInputElement, ISearchProps>(function Input(
	{ isValid = true, className, ...props },
	ref
) {
	return (
		<div className={styles["input"]}>
			<div className={styles["inside_search"]}>
				<img src="search-icon.svg" alt="search" />
				<input
					ref={ref}
					className={cn(styles["searcg_input"], className, {
						[styles["invalid"]]: isValid,
					})}
					{...props}
				/>
			</div>
		</div>
	)
})

export default Search
