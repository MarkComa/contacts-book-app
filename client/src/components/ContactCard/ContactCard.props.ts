import { DetailedHTMLProps, HTMLAttributes } from "react";
import { contactsType } from "../../types/type";

export interface ContactCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	contact: contactsType;
}
