import React from "react";
import { LayoutProps } from "./Layout.props";
import s from "./Layout.module.scss";
import { Header } from "../Header/Header";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={s.wrapper}>
			<Header />
			<div className={s.children}>{children}</div>
		</div>
	);
};
