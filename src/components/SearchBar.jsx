import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from "@mui/icons-material"

const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('');
    }
  }

  return (
    //a paper is a div with white background and some elevation
    <Paper
      component="form" //since search bar is a form
      onSubmit={handleSubmit}
      sx={{
        borderRadius:10,
        border:"1px solid #000",
        pl:2 ,
        boxShadow:'none',
        mr: {md:5} // apply margin-right of 5px on small devices or above
      }} 
    > 
      <input 
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event)=>{setSearchTerm(event.target.value)}}
      />
      <IconButton type='submit' className='icon-btn' sx={{p:{md:'10px',xs:'5px'},color:'cornflowerblue'}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar
