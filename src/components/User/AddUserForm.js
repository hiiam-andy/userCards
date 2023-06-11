import { useState } from 'react'
import React from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'

export default function AddUserForm({create}) {
  const [user, setUser]=useState({firstName:'', email:''})
  const [res,setRes]=useState('')

  const addUser = (e)=>{
    e.preventDefault()
    const newUser = {
      ...user, id:Date.now()
    }
    if( newUser.firstName === '' || newUser.email === '' ){
      setRes('Не все поля заполнены')
    } else {
      create(newUser)
      setUser({firstName:'', email:''})
      setRes('')
    }
}

  return (
    <>
    <form>

      <MyInput
        onChange={e=>setUser({...user, firstName:e.target.value})}
        value={user.firstName}
        placeholder='Имя'
      />

      <MyInput
        onChange={e=>setUser({...user, lasttName:e.target.value})}
        value={user.lastName}
        placeholder='Фамилия'
      />

      <MyInput 
        onChange={e=>setUser({...user, email:e.target.value})}
        value={user.email}
        placeholder='email'
      />

      <MyButton onClick={addUser}>
          Добавить пользователя
      </MyButton>


    </form>
      <>{res}</>
    </>
  )
}
