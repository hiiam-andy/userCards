import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

import styles from '../../styles/User.module.css'

export default function UserItem( {user, remove, edit, toggle} ) {

  return (
    <div className={styles.card}>

      <img src={user.image} alt="userphoto" className={styles.photo}/>

      <div className={styles.desc}>

        {user.isEdit
        ? <MyInput 
            value={user.firstName} 
            onChange={ (event)=>edit(user.id, 'firstName', event) 
          }
          />
        : <p className={styles.name}>{user.firstName +' '+ user.lastName}</p>
        }
        {user.isEdit
        && <MyInput 
            value={user.lastName} 
            onChange={ (event)=>edit(user.id, 'lastName', event) }
          />
        }

        {user.isEdit
        ? <MyInput 
            value={user.email} 
            onChange={ (event)=>edit(user.id, 'email', event) }
          />
        : <p className={styles.email}>{user.email}</p>
        }

        <div>
          <MyButton onClick={ ()=>toggle(user.id) }>
            {user.isEdit ? 'сохранить' : 'редактировать'}
          </MyButton>

          <MyButton onClick={ ()=>remove(user) }>
            Удалить
          </MyButton>
        </div>
      </div>
  </div>
  )
}
