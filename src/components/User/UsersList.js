import React from 'react'
import UserItem from './UserItem'

import styles from '../../styles/User.module.css'

export default function UsersList({users, remove, edit, toggle}) {
  return (
    <div className={styles.section}>
      <h1>Список пользователей</h1>
      <div className={styles.list}>
        {users.map(user=>
        <UserItem
          remove={remove}
          edit={edit}
          toggle={toggle}
          key={user.id}
          user={user}/>
      )}
        </div>
    </div>
  )
}
