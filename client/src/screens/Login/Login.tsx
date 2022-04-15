import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { login } from "../../api/api";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./Login.module.css";

export const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
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
						onClick={() => login(email, password)}
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
