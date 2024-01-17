import React from 'react'
import spyxfamily2 from "../images/spyxfamily2.webp"
import spyxfamily1 from "../images/spyxfamily1.jpg"
import Aoshi from "../images/Aoashi.jpg"
import barutoNaruto from "../images/barutoNaruto.jpg"
import onePiece from "../images/onepiece.jpg"
import captainTsubasa from "../images/captainTsubasa.jpg"
import shingeki from "../images/shingeki.jpg"
import { CiPlay1 } from "react-icons/ci"

const body = () => {
  const bodyStyle = 
  {
    backgroundColor: "#17191c",
  }

  const bodyStyle_ =
  {
    padding: "20px",
    display: "flex",
    margin:"auto",
    width: "80%",
    height:"290px",
    
   
  }

  const desc =
  {
    position:"absolute",
    top:"130px",
    left:"200px",
    color:"#17191c",
    fontFamily: "Arial, Helvetica, sans-serif",
    
  }

  const img_1 =
  {
    borderRadius: "15px 15px",
    objectFit:"fill",
    width:"100%",
    boxShadow:"10px 10px 5px lightblue inset "
  }

  const desc_ =
  {
    position:"relative",
    textAlign: "center",
    color:"white",
    fontWeight:"bold"
  }
  const bluringImage =
  {
    backgroundImage:"linear-gradient(to left, #3333,#333 350%,#eee 250%, #333 350%)",
    width:"1220px",
    height:"290px",
    position:"absolute"
  }
  const playButton =
  {
    width:"120px",
    height:"40px",
    border:"none",
    borderRadius: "25px 25px",
    opacity:"0.6",
    fontWeight: "bold"

  }
  const continueWatching =
  {
    display:"flex",
    flexDirection: "column",
    margin:"auto",
    width:"80%",
    position:"relative",
    bottom:"20px",
    color:"white",
    fontFamily: "Arial, Helvetica, sans-serif"
    
  }
  const continueWatching_ =
  {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
    
    
  }

  const continueWatching_1 =
  {
    borderRadius:"20px 20px",
    position:"relative",
    objectFit:"fill",
    
  }

  const bluringImages =
  {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundImage:"linear-gradient(to bottom, #3333,#17191c 100%,#17191c 50%, #333 50%)",
    position:"absolute",
    width:"170px",
    height:"205px",
    top:"65px"
  }

  const episode =
  {
    
    position:"absolute",
    bottom:"20px",
    left:"0px",
    opacity:"0.9",
    width:"170px",
    height:"40px",
    textAlign:"center",
    borderRadius:"3px"
  }

  const name =
  {
    position:"relative",
    bottom:"5px"
  }

  
  return (
    <div style={bodyStyle}>
      <div style={bodyStyle_}>
        <img src ={spyxfamily2} alt='anya' style={img_1}/>
        <div style={bluringImage}></div>
        <div style={desc}>
           <h5>S1 E1</h5>
           <h2>Spy X Family</h2>
           <p> A spy, an assassin and a telepath come together to pose as a family,<br/>each for their own reasons, while hiding their true identities from each other</p>
           <p>Series - Action - 2022</p>
           <button style={playButton} ><CiPlay1 /> Play</button>
        </div>
      </div>

      <div style={continueWatching}>
        <div>
         <h2>Continue watching</h2>
        </div>
        <div style={continueWatching_}>
        <div>
          <img src ={onePiece} alt='One piece' width={170} height={200} style={continueWatching_1}/>
          <div style={bluringImages}></div>
          <div style={desc_}>
            <p style={episode}>Episode 03</p>
            <p style={name}>One Piece</p>
          </div>
        </div>
        <div>
          <img src ={barutoNaruto} alt='barutoNaruto' width={170} height={200} style={continueWatching_1}/>
          <div style={bluringImages}></div>
          <div  style={desc_}>
            <p style={episode}>Episode 250</p>
            <p style={name}>Baruto Naruto</p>
          </div>
          
        </div>
        <div >
           <img src ={spyxfamily1}  alt='anya' width={170} height={200} style={continueWatching_1}/>
           <div style={bluringImages}></div>
           <div  style={desc_}>
             <p style={episode}>Episode 10</p>
             <p style={name}>Spy x Family</p>
           </div>
           
        </div>
        <div>
           <img src ={shingeki} alt='shingeki' width={170} height={200} style={continueWatching_1}/>
           <div style={bluringImages}></div>
           <div  style={desc_}>
             <p style={episode}>Episode 07</p>
             <p style={name}>Shingeki no kyonjin</p>
           </div>
           
        </div>
        <div>
          <img src ={captainTsubasa}  alt='Captain tsubasa' width={170} height={200} style={continueWatching_1}/>
          <div style={bluringImages}></div>
          <div  style={desc_}>
            <p style={episode}>Episode 21</p>
            <p style={name}>Captain Tsubasa</p>
          </div>
          
        </div>
        <div>
          <img src ={Aoshi}  alt='Aoashi' width={170} height={200} style={continueWatching_1}/>
          <div style={bluringImages}></div>
          <div  style={desc_}>
            <p style={episode}>Episode 12</p>
            <p style={name}>Aoashi</p>
          </div>
          
        </div>
        
        </div>
        
      </div>

    </div>
  )
}

export default body
