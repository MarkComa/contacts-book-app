import React from 'react'
import { ButtonProps } from './Button.props'
import s from './Button.module.css'
import cn from 'classnames'

export const Button = ({children, className}:ButtonProps) => {
  return (
    <button className={cn(className, s.btn)}>{children}</button>
  )
}
