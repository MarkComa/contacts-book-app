import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import s from "./Header.module.css";

export const Header = (): JSX.Element => {
	const email = useAppSelector((state) => state.auth.user?.email);
	const token = localStorage.getItem("token");
	return (
		<div className={s.header}>
			<Link to={"/"}>
				<img src="" alt="logo" />
			</Link>
			{!!token && (
				<div className={s.action}>
					<span>{email}</span>
					<span>Выйти</span>
				</div>
			)}
		</div>
	);
};
