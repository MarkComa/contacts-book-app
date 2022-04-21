import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { login } from "../../redux/reducers/authReducer";
import s from "./Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../../types/type";

export const Login = () => {
	const dispatch = useAppDispatch();
	const token = localStorage.getItem("token");
	const { register, handleSubmit } = useForm<LoginInput>();

	if (!!token) {
		return <Navigate to="/" />;
	}

	const onSubmit: SubmitHandler<LoginInput> = (data) => {
		dispatch(login({ data }));
	};

	return (
		<div className={s.login}>
			<form className={s.block} onSubmit={handleSubmit(onSubmit)}>
				<p className={s.title}>Логин</p>
				<input
					{...register("email", { required: true })}
					type={"email"}
					placeholder="Введите почту..."
					className={s.input}
				/>
				<input
					{...register("password", { required: true })}
					type={"password"}
					placeholder="Введите пароль..."
					className={s.input}
				/>
				<div className={s.actions}>
					<input className={s.btn} type="submit" value="Войти" />
					<NavLink to={"/registration"}>
						<button className={s.btn}>Зарегистрироваться</button>
					</NavLink>
				</div>
			</form>
		</div>
	);
};
