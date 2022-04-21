import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import s from "./Header.module.css";

export const Header = (): JSX.Element => {
	const email = useAppSelector((state) => state.auth.user?.email);
	console.log(email);
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	return (
		<div className={s.header}>
			<Link to={"/"}>
				<img src="" alt="logo" />
			</Link>
			{isAuth && (
				<div className={s.action}>
					<span>{email}</span>
					<span>Выйти</span>
				</div>
			)}
		</div>
	);
};
