import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContactCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	contact: contact;
}
export type contact = {
	id: string;
	name: string;
	phoneNumber: string;
};
