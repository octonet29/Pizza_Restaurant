import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/ui/Button/Button"
import HTag from "../../components/ui/HTag/HTag"
import Input from "../../components/ui/Input/Input"
import styles from "./Login.module.css"
import { FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { login } from "../../store/user.slice"

export type LoginForm = {
	email: {
		value: string
	}
	password: {
		value: string
	}
}

const Login = () => {
	const [error, setError] = useState<string | null>()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const jwt = useSelector((s: RootState) => s.user.jwt)

	useEffect(() => {
		if (jwt) {
			navigate("/")
		}
	}, [jwt, navigate])

	const submit = async (e: FormEvent) => {
		e.preventDefault()
		setError(null)
		const target = e.target as typeof e.target & LoginForm
		const { email, password } = target
		await sendLogin(email.value, password.value)
	}

	const sendLogin = async (email: string, password: string) => {
		dispatch(login({ email, password }))
	}

	return (
		<div className={styles["login"]}>
			<HTag>Log In</HTag>
			<form className={styles["form"]} onSubmit={submit}>
				<div className={styles["field"]}>
					<label htmlFor="email">Your Email</label>
					<Input id="email" value="a@gmail.com" />
				</div>
				<div className={styles["field"]}>
					<label htmlFor="password">Your Password</label>
					<Input id="password" type="password" value="123" />
				</div>
				<Button appearance={"big"}>Log In</Button>
				<div className={styles["links"]}>
					<div>Havent accaount?</div>
					<Link to="/auth/register">Register</Link>
				</div>
			</form>
		</div>
	)
}

export default Login
