import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import s from './style.module.css'

export default function ProductsList() {
  
    // считать данные из стейта и отобразить их

    const products = useSelector(state => state)

  return (
    <div className={s.container}>
        {
            products.map(item => <ProductItem key={item.id} {...item}/>)
        }
    </div>
  )
}
