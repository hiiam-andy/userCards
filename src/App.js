import React, { useEffect, useState } from "react";
import './styles/style.css'
import UsersList from "./components/User/UsersList";
import Header from './components/Header/header'
import Footer from "./components/Footer/Footer";
import PostUsers from "./API/PostUsers";
import { getPageCount, getPagesArray } from "./utils/pages";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [users,setUsers] = useState([])
  const [modalVisible,setModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)

  let pagesArray = getPagesArray(totalPages)

useEffect(()=>{
  fetchUsers()
}, [])

  async function fetchUsers(){
    const response = await PostUsers.getAll(limit, skip)
    setUsers(response.users)
    const totalCount = response.total
    setTotalPages(getPageCount(totalCount, limit))
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
    <div style={{display:'flex', justifyContent:'center'}}>
    {pagesArray.map(page=>{
      return <MyButton>{page}</MyButton>
    })}
    </div>
    <Footer/>
    </div>
  )
}


export default App;
