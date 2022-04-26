import React from "react";
import s from "./Registration.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import { registration } from "../../redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../../types/type";
import { Preloader } from "../../components";

export const Registration = () => {
	const dispatch = useAppDispatch();
	const isOk = useAppSelector((state) => state.auth.isOk);
	const isFetching = useAppSelector((state) => state.auth.isFetching);
	const { register, handleSubmit } = useForm<LoginInput>();

	const onSubmit: SubmitHandler<LoginInput> = (data) => {
		dispatch(registration({ data }));
	};

	if (isOk) {
		return <Navigate to="/login" />;
	}

	if (isFetching) {
		return <Preloader />;
	}

	return (
		<div className={s.registration}>
			<form className={s.block} onSubmit={handleSubmit(onSubmit)}>
				<p className={s.title}>Регистрация</p>
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
					<input
						className={s.btn}
						type="submit"
						value="Зарегистрироваться"
					/>
					<NavLink to={"/login"}>
						<button className={s.btn}>Войти</button>
					</NavLink>
				</div>
			</form>
		</div>
	);
};
