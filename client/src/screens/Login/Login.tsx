import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { login } from "../../redux/reducers/authReducer";
import s from "./Login.module.css";
export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector((state) => state.auth.isAuth);

	if (isAuth) {
		return <Navigate to="/" />;
	}

	return (
		<div className={s.login}>
			<div className={s.block}>
				<p className={s.title}>Логин</p>
				<Input
					type={"email"}
					placeholder="Введите почту..."
					className={s.input}
					value={email}
					setValue={setEmail}
				/>
				<Input
					type={"password"}
					placeholder="Введите пароль..."
					className={s.input}
					value={password}
					setValue={setPassword}
				/>
				<div className={s.actions}>
					<Button
						className={s.btn}
						onClick={() => dispatch(login({ email, password }))}
					>
						Войти
					</Button>
					<NavLink to={"/registration"}>
						<Button className={s.btn}>Зарегистрироваться</Button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
