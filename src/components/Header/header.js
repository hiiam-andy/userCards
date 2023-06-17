import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyModal from '../UI/modal/MyModal'
import AddUserForm from '../User/AddUserForm'

import styles from '../../styles/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header({modalVisible,setModalVisible,create}) {
  return (
    <div className={styles.header}>
      <div style={{display:'flex'}}>
        <p>Logo</p>
        <p>MyFriends</p>
      </div>
      <Link to='/about'>О сайте</Link>
    <MyButton onClick={()=>setModalVisible(true)}>
      Добавить нового пользователя
    </MyButton>
    <MyModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
      >
        <AddUserForm create={create}/>
      </MyModal>
  </div>
  )
}
