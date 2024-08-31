import { HTMLAttributes, ReactNode } from "react"

export interface IHTag extends HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
}
