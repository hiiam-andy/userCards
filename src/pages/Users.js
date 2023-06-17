import React, { useEffect, useState } from "react";
import '../styles/style.css'
import UsersList from "../components/User/UsersList";
import Header from '../components/Header/header'
import Footer from "../components/Footer/Footer";
import Pagination from "../components/Pagination/Pagination";
import PostUsers from "../API/PostUsers";
import { getPageCount, getPagesArray } from "../utils/pages";

function Users() {

  const [users,setUsers] = useState([])
  const [modalVisible,setModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [limit, setLimit] = useState(6)
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)
  
  const pagesArray = getPagesArray(totalPages)
  
  useEffect(()=>{
    fetchUsers()
    console.log('изменилось')
  }, [page, setPage])
  
  async function fetchUsers(){
    const response = await PostUsers.getAll(limit, skip)
    setUsers(response.users)
    const totalCount = response.total
    setTotalPages(getPageCount(totalCount, limit))
  }

  const changePage = (page, limit) => {
    setSkip((page-1)*limit)
    setPage(page)
    fetchUsers()
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

    <Pagination 
    pagesArray={pagesArray} 
    changePage={changePage}
    limit={limit}/>
    <Footer/>
    </div>
  )
}

export default Users;
