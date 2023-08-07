import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import gitty from '../src/Images/gitty.png'
import sstats from '../src/Images/sstats.png'
import aart from '../src/Images/aart.png'
import pPic from '../src/Images/DISCYPICY.jpg'
import { images } from 'next.config'
import {motion} from "framer-motion"
import { useState } from 'react'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import Navbar from 'components/NavBar'
import Footing from 'components/Footing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [hover, setHover] = useState(false);
const [sHover, setSHover] = useState(false);
const [aHover, setAHover] = useState(false);
  return (
    <>
    <Navbar></Navbar>
    <div className={styles.main}>
      <Head>
        <title>Kwasi Donkor</title>
        
        
      </Head>
     <div className={styles.title}>
     <h1>About Kwasi Donkor:</h1>
     </div>
     <div className={styles.projects}>
     <Image src ={pPic} className={styles.portfolioImage} ></Image>
     </div>
     &nbsp;
     &nbsp;

     <div className={styles.maintext}>
     <p>My name is Kwasi Donkor and i am a full stack web developer who has just graduated from Seneca Computer programming analysis program
      During my time at Seneca I have learned many various aspects of software development and programming languages  But I have enjoyed learning about  web developing the best.
      I First learned how to create websites using HTML, CSS ,js and Node
      I then learned about  developing front end web applications on Frameworks like Angular and react.



     </p>

     <p >
     Below you can find links to my Github and links to some of the projects that I am currently most proud of working on!
     </p>

     </div>
     &nbsp;

     <div className={styles.projects}>
      <div className={styles.descBorder} >
 <motion.div  animate ={{y: hover? -10:0, y: !hover? 10:0}} initial={{y : 10}} className={styles.divpic}  onHoverStart={() => {
  setHover(true);
 }} onHoverEnd={() => {
  setHover(false);
 }}>
 
 <a className={styles.linkDesc} href="https://github.com/DonkorKwasi" target='_blank'>
<Image  src={gitty} className={styles.gitpic}   ></Image>
<p className={styles.cardDesc}>Here you can see the repositories for the projects mentioned on this page and anything else i am currently working on</p><br></br>
</a>
</motion.div>
</div>



<div className={styles.descBorder}>
<motion.div  className={styles.divpic} animate ={{y: sHover? -10:0, y: !sHover? 10:0}} initial={{y : 10}} onHoverStart={() => {
  setSHover(true);
 }} onHoverEnd={() => {
  setSHover(false);
 }}>
 
 <a className={styles.linkDesc} href="https://spotifystats-donkorkwasi.vercel.app/" target='_blank'>
<Image  src={sstats} className={styles.gitpic}   ></Image>
<p className={styles.cardDesc}>Here you can see the repositories for the projects mentioned on this page and anything else I am currently working on.
This project uses the spotify api to allow users to search for in depth information about any song on spotify. This app is made with Next.js
</p>
</a>

</motion.div>

</div>

<div className={styles.descBorder}>
<motion.div  className={styles.divpic} animate ={{y: aHover? -10:0, y: !aHover? 10:0}} initial={{y : 10}} onHoverStart={() => {
  setAHover(true);
 }} onHoverEnd={() => {
  setAHover(false);
 }}>
 
 <a className={styles.linkDesc} href="https://vercel-metropolitan.vercel.app/" target='_blank'>
<Image  src={aart} className={styles.gitpic}   ></Image>
<p className={styles.cardDesc}>This project consumes a public api and an api that I have created to allow for users to search for interesting antique art. This app is made in React</p>
</a>

</motion.div>

</div>

</div>
</div>
<div >
<h2 className={styles.skillTitle}>Skills:</h2>
</div>
<div className={styles.skillSection}>
  

<ul className={styles.listLine}>
  <li className={styles.listItem}>Html</li>
  <li className={styles.listItem}>Css</li>
  <li className={styles.listItem}>Javascript</li>
  <li className={styles.listItem}>Typescript</li>
</ul>
<ul className={styles.listLine}>
<li className={styles.listItem}>Mongo DB</li>
  <li className={styles.listItem}>React</li>
  <li className={styles.listItem}>Angular</li>
  <li className={styles.listItem}>Node</li>
</ul>
<ul className={styles.listLine}>
<li className={styles.listItem}>xamarin</li>
  <li className={styles.listItem} >Android studio</li>
  <li className={styles.listItem} >C#</li>
  <li className={styles.listItem}>JAVA</li>
</ul>
</div>
<Footing></Footing>

    </>
  )
}
