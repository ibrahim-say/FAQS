
"use client" 

import Image from "next/image"
import { useEffect, useState } from "react"
import myimge from "../../public/background-pattern-desktop.svg"
import myimge1 from "../../public/background-pattern-mobile.svg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Plusicon from "../../components/plusicon"
import Minusicon from "../../components/minusicon"
import star from "../../public/icon-star.svg"
import { useHotkeys } from 'react-hotkeys-hook';
export default function Home() {
  const [expandedOne,setExpandedOne]=useState(false)
  const [expandedTwo,setExpandedTwo]=useState(false)
  const [expandedThree,setExpandedThree]=useState(false)
  const [expandedFour,setExpandedFour]=useState(false)
  const [pageWidth,setPageWidth] = useState()
  const [accNum,setAccNum] = useState(0) 
  
  useHotkeys('down', () => setAccNum(accNum => {
    if(accNum===4){
    return  accNum=1
    }else{
    return  accNum+1
    }
  }));
  useHotkeys('up', () => setAccNum(accNum => {
    if(accNum===1||accNum===0){
    return  accNum=4
    }else{
    return  accNum-1
    }
  }));
  useHotkeys('enter', () =>{
    accNum===1&&swichIcon(expandedOne,1)
    accNum===2&&swichIcon(expandedTwo,2)
    accNum===3&&swichIcon(expandedThree,3)
    accNum===4&&swichIcon(expandedFour,4)
  });
 

function swichIcon(bool,num){
  num===1&& setExpandedOne(!bool)   
  num===2&& setExpandedTwo(!bool)   
  num===3&& setExpandedThree(!bool)   
  num===4&& setExpandedFour(!bool)   

}




  return (
   
 <div >
  {
  pageWidth<=375?<Image src={myimge1} alt="" className="mx-auto d-flex" ></Image>:<Image src={myimge} alt="" className="mx-auto d-flex"></Image>
  }
 
  <div className={` mx-auto centerAcc ${pageWidth<=375?"w-90 mt-132":"w-75 mt-220"} `}  >
    <div className="d-flex border-0">
      <Image className="mx-3" src={star} alt=""/>
      <h1  style={{color:"hsl(292, 42%, 14%)",marginTop:"3px"}} >FAQS</h1>
    </div>
      <Accordion expanded={expandedOne} onChange={(()=>{swichIcon(expandedOne,1)})} className={`${accNum===1?"bg-eee":""}`} >
        <AccordionSummary
          expandIcon={expandedOne?<Minusicon/>:<Plusicon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography  sx={{color:"hsl(292, 42%, 14%)"}} className="firstP"> What is Frontend Mentor, and how will it help me?</Typography>
        </AccordionSummary >
        <AccordionDetails>
          <Typography sx={{color:'hsl(292, 16%, 49%)'}}>
          Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedTwo} onChange={(()=>{swichIcon(expandedTwo,2)})} className={`${accNum===2?"bg-eee":""}`}>
        <AccordionSummary
          expandIcon={expandedTwo?<Minusicon/>:<Plusicon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{color:"hsl(292, 42%, 14%)"}} className="firstP">  Is Frontend Mentor free?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography sx={{color:'hsl(292, 16%, 49%)'}}>
          Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedThree} onChange={(()=>{swichIcon(expandedThree,3)})} className={`${accNum===3?"bg-eee":""}`}>
        <AccordionSummary
          expandIcon={expandedThree?<Minusicon/>:<Plusicon/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{color:"hsl(292, 42%, 14%)"}} className="firstP">Can I use Frontend Mentor projects in my portfolio?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'hsl(292, 16%, 49%)'}}>
          Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedFour} onChange={(()=>{swichIcon(expandedFour,4)})} className={`border-0 ${accNum===4?"bg-eee":""}`}>
        <AccordionSummary
          expandIcon={expandedFour?<Minusicon/>:<Plusicon/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography sx={{color:"hsl(292, 42%, 14%)"}} className="firstP">  How can I get help if I'm stuck on a Frontend Mentor challenge?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'hsl(292, 16%, 49%)'}}>
          The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 </div>
  )
}
