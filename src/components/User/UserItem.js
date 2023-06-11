import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

import styles from '../../styles/User.module.css'

export default function UserItem( {user, remove, edit, toggle} ) {

  return (
    <div className={styles.card}>
      <div className={styles.desc}>

        {user.isEdit
        ? <MyInput 
            value={user.name} 
            onChange={ (event)=>edit(user.id, 'name', event) }
          />
        : <p className={styles.name}>{user.name}</p>
        }

        {user.isEdit
        ? <MyInput 
            value={user.email} 
            onChange={ (event)=>edit(user.id, 'email', event) }
          />
        : <p className={styles.email}>{user.email}</p>
        }

        <div className={styles.photo}>Фото</div>
        

      </div>
        <div>
          <MyButton onClick={ ()=>toggle(user.id) }>
            {user.isEdit ? 'сохранить' : 'редактировать'}
          </MyButton>

          <MyButton onClick={ ()=>remove(user) }>
            Удалить
          </MyButton>
        </div>
  </div>
  )
}
