import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./Login.module.css";

export const Login = () => {
	return (
		<div className={s.login}>
			<div className={s.block}>
				<p className={s.title}>Логин</p>
				<Input
					type={"email"}
					placeholder='Введите почту...'
					className={s.input}
				/>
				<Input
					type={"password"}
					placeholder='Введите пароль...'
					className={s.input}
				/>
				<div className={s.actions}>
					<Button className={s.btn}>Войти</Button>
					<NavLink to={"/registration"}>
						<Button className={s.btn}>Зарегистрироваться</Button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};
