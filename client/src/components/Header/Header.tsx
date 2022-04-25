import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout } from "../../redux/reducers/authReducer";
import s from "./Header.module.scss";

export const Header = (): JSX.Element => {
	const email = useAppSelector((state) => state.auth.user?.email);
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const dispatch = useAppDispatch();
	return (
		<div className={s.header}>
			<Link to={"/"}>
				<img src="" alt="logo" />
			</Link>
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
