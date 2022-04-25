import React from "react";
import { SearchContactProps } from "./SearchContact.props";
import s from "./SearchContact.module.scss";

export const SearchContact = ({
	search,
	setSearch,
	className,
	...props
}: SearchContactProps): JSX.Element => {
	return (
		<div className={s.searchContact} {...props}>
			<span>Поиск:</span>
			<input
				type="text"
				placeholder="Поиск"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};
