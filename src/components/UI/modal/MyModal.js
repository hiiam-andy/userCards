import React from 'react'

import styles from './MyModal.module.css'

export default function MyModal({children, modalVisible, setModalVisible}) {

  const rootClass = [styles.myModal]

  if(modalVisible){
    rootClass.push(styles.active)
  }

  return (
    <div 
      className={rootClass.join(' ')}
      onClick={()=>setModalVisible(false)}
    >
      <div 
        className={styles.myModalContent}
        onClick={(e)=>e.stopPropagation()}
      >
        {children}
      </div>
      </div>
  )
}
