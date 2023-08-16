import styles from '@/styles/Home.module.css' 
import {motion} from "framer-motion"
import { useState } from 'react';
function Navbar()
{

        const [hover1, setHover1] = useState(false);
const [hover2, setHover2] = useState(false);
const [hover3, setHover3] = useState(false);
 return (
<>
<nav className={styles.navbar} >

        
<motion.a animate ={{backgroundColor: hover3? 'darkgray':'#333', backgroundColor: !hover3? '#333':'darkgray'  }} initial={{backgroundcolor : '#333'} } onHoverStart={ ()=>
        {
setHover3(true);
        }}  onHoverEnd={()=> {
                setHover3(false)
        }} href='/'>Home</motion.a>
        <motion.a animate ={{backgroundColor: hover1? 'darkgray':'#333', backgroundColor: !hover1? '#333':'darkgray'  }} initial={{backgroundcolor : '#333'} } onHoverStart={ ()=>
        {
setHover1(true);
        }}  onHoverEnd={()=> {
                setHover1(false)
        }}href='/projectBreakdown'>Project Breakdown</motion.a>
    
     
       <motion.a animate ={{backgroundColor: hover2? 'darkgray':'#333', backgroundColor: !hover2? '#333':'darkgray'  }} initial={{backgroundcolor : '#333'} } onHoverStart={ ()=>
        {
setHover2(true);
        }}  onHoverEnd={()=> {
                setHover2(false)
        }} href='/contact'>Resume</motion.a>
      
    
    
      

</nav>


</>

 )
// update the resume page and shit


}

export default Navbar;