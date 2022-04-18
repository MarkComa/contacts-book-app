import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./Registration.module.css";
import { Navigate, NavLink } from "react-router-dom";
import { registration } from "../../redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const Registration = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();
	const compliteMessage = useAppSelector((state) => state.auth.message);
	console.log(compliteMessage);
	if (!!compliteMessage) {
		return <Navigate to="/login" />;
	}
	return (
		<div className={s.registration}>
			<div className={s.block}>
				<p className={s.title}>Регистрация</p>
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
						onClick={() =>
							dispatch(registration({ email, password }))
						}
					>
						Зарегистрироваться
					</Button>
					<NavLink to={"/login"}>
						<Button className={s.btn}>Войти</Button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
