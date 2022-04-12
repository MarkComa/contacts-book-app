import React from 'react'
import s from './Input.module.css'
import cn from 'classnames'

import { InputProps } from './Input.props'
export const Input = ({placeholder, className, ...props}:InputProps):JSX.Element => {
  return (
    <input className={cn(s.input, className)} type={'text'} placeholder={placeholder} {...props}/>
  )
}
