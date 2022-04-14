import React, { useState } from "react";
import { SearchContactProps } from "./SearchContact.props";
import s from "./SearchContact.module.scss";

export const SearchContact = ({
	className,
	...props
}: SearchContactProps): JSX.Element => {
	const [search, setSearch] = useState<string>("");
	return (
		<div className={s.searchContact}>
			<input
				type="text"
				placeholder="Поиск"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className={s.btn}>Найти</button>
		</div>
	);
};
