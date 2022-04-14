import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	HTMLInputTypeAttribute,
} from "react";

export interface InputProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder?: string;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	type?: HTMLInputTypeAttribute;
}
