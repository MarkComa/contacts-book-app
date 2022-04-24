import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SearchContactProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
		search: string,
		setSearch: React.Dispatch<React.SetStateAction<string>>
	}
