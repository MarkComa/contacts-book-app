import React from "react";
import { SearchContactProps } from "./SearchContact.props";
import s from "./SearchContact.module.scss";

export const SearchContact = ({
	className,
	...props
}: SearchContactProps): JSX.Element => {
	return (
		<div className={s.searchContact}>
			<input type="text" placeholder="Поиск" />
			<button className={s.btn}>Найти</button>
		</div>
	);
};
