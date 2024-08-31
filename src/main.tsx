import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom"
import Cart from "./pages/Cart/Cart.tsx"
import Error from "./pages/Error/Error.tsx"
import Layout from "./layout/Layout/Layout.tsx"
import Home from "./pages/Home/Home.tsx"
import Product from "./pages/Product/Product.tsx"
import { PREFIX } from "./helpers/API.ts"
import axios from "axios"
import Login from "./pages/Login/Login.tsx"
import Register from "./pages/Register/Register.tsx"
import AuthLayout from "./layout/Auth/AuthLayout.tsx"
import RequireAuth from "./helpers/RequireAuth.tsx"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/product/:id",
				element: <Product />,
				errorElement: <>Error</>,
				loader: async ({ params }) => {
					return defer({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios
									.get(`${PREFIX}/products/${params.id}`)
									.then((data) => resolve(data))
									.catch((e) => reject(e))
							}, 2000)
						}),
					})
				},
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
	{
		path: "*",
		element: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
