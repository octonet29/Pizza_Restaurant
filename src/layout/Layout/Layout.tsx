import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import styles from "./Layout.module.css"
import Button from "../../components/ui/Button/Button"
import cn from "classnames"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import { userActions } from "../../store/user.slice"

const Layout = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const logout = () => {
		dispatch(userActions.logout())
		navigate("/auth/login")
	}

	return (
		<div className={styles["layout"]}>
			<div className={styles["sidebar"]}>
				<div className={styles["user"]}>
					<img className={styles["avatar"]} src="avatar.png" alt="" />
					<h2 className={styles["name"]}>Octonet Planyyewa</h2>
					<p className={styles["email"]}>20shamballa01@gmail.com</p>
				</div>
				<div className={styles["menu"]}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							cn(styles["link"], {
								[styles.active]: isActive,
							})
						}
					>
						<img src="menu-icon.svg" alt="" /> Home
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) =>
							cn(styles["link"], {
								[styles.active]: isActive,
							})
						}
					>
						<img src="exit-icon.svg" alt="" />
						Cart
					</NavLink>
				</div>
				<Button
					className={styles["exit"]}
					appearance={"small"}
					onClick={logout}
				>
					<img src="/exit-icon.svg" alt="" />
					Button
				</Button>
			</div>
			<div className={styles["content"]}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
