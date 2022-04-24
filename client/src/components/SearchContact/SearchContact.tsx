import React from "react";
import { SearchContactProps } from "./SearchContact.props";
import s from "./SearchContact.module.scss";
import { useAppDispatch } from "../../hooks/hooks";

export const SearchContact = ({ search, setSearch, 
	className,
	...propsЫ
}: SearchContactProps): JSX.Element => {
	const dispatch = useAppDispatch()
	return (
		<div className={s.searchContact}>
			<input
				type="text"
				placeholder="Поиск"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};
