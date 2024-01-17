import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const header = () => {

  const Header  = 
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#17191c",
    paddingLeft: "40px",
    color:"White",
    fontFamily: "Arial, Helvetica, sans-serif"
   
  }

  const HeaderOption =
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width:"30%",
    color:"grey"
  }

  const searchBar =
  {
    height: "40px",
    position:"relative",
    right:"150px",
    marginTop:"10px",
    width:"300px",
    borderRadius: "40px 40px 40px",
   cursor:"pointer",
   backgroundColor:"#383c42",
   color:"black",
   border:"none"
  }

  const searchIcon =
  {
    position:"absolute",
    left:"1380px",
    top:"23px",
    color:"white"
  }
  return (
    <div style={Header}> 
      <h2>Animeone</h2>
      <div style={HeaderOption}>
        <h4>Home</h4>
        <h4>Genres</h4>
        <h4>Movies</h4>
        <h4>Series</h4>
        <h4>Mangas</h4>
      </div>
      <input placeholder='Search' style={searchBar} /><IoSearchSharp style={searchIcon}/>
    </div>
  )
}

export default header
