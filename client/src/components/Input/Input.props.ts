import { DetailedHTMLProps, HTMLAttributes, HTMLInputTypeAttribute } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
}