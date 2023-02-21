import React from 'react'
import { useDispatch } from 'react-redux';
import s from './style.module.css'

export default function AddProduct() {

    const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const {name, price} = event.target;

    dispatch({type: 'ADD', payload: {
        id: Date.now(),
        title: name.value,
        price: price.value
    }});

    name.value = '';
    price.value = '';

  }

  return (
    <form className={s.container} onSubmit={onSubmit}>
        <input type="text"  placeholder='Название' name='name'/>
        <input type="text" placeholder='Цена' name='price'/>
        <button>Добавить</button>
    </form>
  )
}

// создать новый productsReducer редюсер, 
// у него должна быть обработка type "ADD" и payload с данными из формы
// payload должен содержать в себе объект с полями id (Date.now()), tite, price


