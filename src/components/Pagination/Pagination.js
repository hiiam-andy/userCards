import React from 'react'
import '../../styles/style.css'

export default function Pagination({pagesArray, changePage, limit}) {
  const pageNumber = pagesArray.map(page=>{
    return <li className={'page'} key={page} onClick={()=>changePage(page, limit)}>{page}</li>
  })

  return (
    <ul style={{display:'flex', justifyContent:'center',listStyle:'none'}}>
      {pageNumber}
    </ul>
  )
}




