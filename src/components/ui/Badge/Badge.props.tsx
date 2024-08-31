import { HTMLAttributes, ReactNode } from "react"

export interface IBadge extends HTMLAttributes<HTMLSpanElement> {
	children: ReactNode
	appearance: "white" | "primary"
}
