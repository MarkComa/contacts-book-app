import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { login } from "../../redux/reducers/authReducer";
import s from "./Login.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../../types/type";
import { Preloader } from "../../components";
import { ResultRes } from "../../components/ResultRes/ResultRes";

export const Login = () => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const isFetching = useAppSelector((state) => state.auth.isFetching);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInput>();

	const onSubmit: SubmitHandler<LoginInput> = (data) => {
		dispatch(login({ data }));
	};
	if (isAuth) {
		return <Navigate to="/" />;
	}

	if (isFetching) {
		return <Preloader />;
	}

	return (
		<div className={s.login}>
			<form className={s.block} onSubmit={handleSubmit(onSubmit)}>
				<p className={s.title}>Логин</p>
				<div className={s.block__email}>
					<input
						{...register("email", { required: true })}
						type={"email"}
						placeholder="Введите почту..."
						className={s.input}
					/>
					{errors.email && (
						<span className={s.err}>Введите почту</span>
					)}
				</div>
				<div className={s.block__password}>
					<input
						{...register("password", { required: true })}
						type={"password"}
						placeholder="Введите пароль..."
						className={s.input}
					/>
					{errors.password && (
						<span className={s.err}> Введите пароль</span>
					)}
				</div>
				<div className={s.actions}>
					<input className={s.btn} type="submit" value="Войти" />
					<NavLink to={"/registration"}>
						<button className={s.btn}>Зарегистрироваться</button>
					</NavLink>
				</div>
			</form>
			<ResultRes />
		</div>
	);
};
