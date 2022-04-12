import React from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./Registration.module.css";
import { NavLink } from "react-router-dom";

export const Registration = () => {
	return (
		<div className={s.registration}>
			<div className={s.block}>
				<p className={s.title}>Регистрация</p>
				<Input type={'email'} placeholder='Введите почту...' className={s.input} />
				<Input type={'password'}  placeholder='Введите пароль...' className={s.input} />
				<div className={s.actions}>
					<Button className={s.btn}>Зарегистрироваться</Button>
					<NavLink to={'/auth'}><Button className={s.btn}>Войти</Button></NavLink>
				</div>
			</div>
		</div>
	);
};
