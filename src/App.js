import React, { useEffect, useState } from "react";
import UsersList from "./components/User/UsersList";
import Header from './components/Header/header'
import Footer from "./components/Footer/Footer";

import './styles/style.css'
import PostUsers from "./API/PostUsers";

function App() {

  const [users,setUsers] = useState([])
  const [modalVisible,setModalVisible] = useState(false)

useEffect(()=>{
  fetchUsers()
}, [])

  async function fetchUsers(){
    const users = await PostUsers.getAll()
    setUsers(users)
  }
  
  const createUser =(newUser)=> {
    setUsers([...users, newUser])
    setModalVisible(false)
  }
  const removeUser =(user)=> {
    setUsers(users.filter(u=>u.id !== user.id))
  }
  const editUser =(id,field,event)=> {
    setUsers(users.map(user=>{
      if(user.id === id){
        return {...user, [field]:event.target.value}
      }
      return user
    }))
  }
  const toggleMode =(id)=> {
    setUsers(users.map(user=>{
      if(user.id === id){
        return {...user, isEdit: !user.isEdit}
      }
      return user
    }))
  }

	return(
    <div className="App">
      <Header 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        create={createUser}
      />
    {
      users.length !== 0
      ? <UsersList 
        users={users}
        remove={removeUser} 
        edit={editUser} 
        toggle={toggleMode} 
        />
      : <h1 style={{display:'flex', justifyContent:'center'}}>Нет пользователей</h1>
    }
    <Footer/>
    </div>
  )
}


export default App;
