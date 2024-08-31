import { useEffect, useState } from "react"
import HTag from "../../components/ui/HTag/HTag"
import Search from "../../components/ui/Search/Search"
import { PREFIX } from "../../helpers/API"
import styles from "./Home.module.css"
import { Product } from "../../interfaces/product.interface"
import ProductCard from "../../components/ProductCard/ProductCard"
import axios, { AxiosError } from "axios"
import HomeList from "./HomeList/HomeList"

const Home = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>()

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true)
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve()
				}, 2000)
			})

			const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data)
			setIsLoading(false)
		} catch (e) {
			console.error(e)
			if (e instanceof AxiosError) {
				setError(e.message)
			}
			setIsLoading(false)
			return
		}
	}

	useEffect(() => {
		getMenu()
	}, [])

	return (
		<>
			<div className={styles["nav"]}>
				<HTag>Menyu</HTag>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			{error && <>{error}</>}
			{!isLoading && <HomeList products={products} />}
			{isLoading && <>Loading</>}
		</>
	)
}

export default Home
