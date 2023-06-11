import { useState } from 'react'
import React from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'

export default function AddUserForm({create}) {
  const [user, setUser]=useState({name:'', email:''})
  const [res,setRes]=useState('')

  const addUser = (e)=>{
    e.preventDefault()
    const newUser = {
      ...user, id:Date.now()
    }
    if( newUser.name === '' || newUser.email === '' ){
      setRes('Не все поля заполнены')
    } else {
      create(newUser)
      setUser({name:'', email:''})
      setRes('')
    }
}

  return (
    <>
    <form>

      <MyInput
        onChange={e=>setUser({...user, name:e.target.value})}
        value={user.name}
        placeholder='Имя'
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
