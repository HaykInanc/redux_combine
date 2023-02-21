import React from 'react'
import s from './style.module.css'

export default function ProductItem({id, title, price}) {
  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}
