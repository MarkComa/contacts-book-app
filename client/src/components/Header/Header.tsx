import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout } from "../../redux/reducers/authReducer";
import s from "./Header.module.scss";
import logo from './logo.png'

export const Header = (): JSX.Element => {
	const email = useAppSelector((state) => state.auth.user?.email);
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const dispatch = useAppDispatch();
	return (
		<div className={s.header}>
			<img src={logo} alt="logo" width='56' height='56' />
			{isAuth && (
				<div className={s.action}>
					<span>{email}</span>
					<button
						className={s.btn}
						onClick={() => dispatch(logout())}
					>
						Выйти
					</button>
				</div>
			)}
		</div>
	);
};
