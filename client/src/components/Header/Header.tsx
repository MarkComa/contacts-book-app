import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css'

export const Header = ():JSX.Element => {
  return (
    <div className={s.header}>
        <Link to={'/'}><img src="" alt="logo" /></Link>
        <div className={s.action}>
            <span>Логин</span>
            <span>Выйти</span>
        </div>
    </div>
  )
}
