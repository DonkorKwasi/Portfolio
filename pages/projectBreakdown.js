import Navbar from "components/NavBar";
import Footing from "components/Footing";
import Image from 'next/image'
import metpic from '../src/Images/met.png'
import sp1 from '../src/Images/spot1.png'
import sp2 from '../src/Images/spot2.png'
import styles from '../src/styles/breakdown.module.css'
import Link from "next/link";
import { motion } from "framer-motion";

function projectBreakdown()
{

  
return(

    <>
    
    <Navbar></Navbar>
    <br/>
    <br/>
    <div className={styles.container}>
    
    <h1 className={styles.title}>Metropolitan Museum App</h1>
    <div className={styles.buttonCont}>
      <motion.div whileHover={{scale: 1.1}}>
      <Link href="https://vercel-metropolitan.vercel.app/" target='_blank'>
    <button className={styles.buttonFloat}>Link to the MET App</button>
    </Link>
    </motion.div>
    </div>
    <Image src={metpic} className={styles.widepic}></Image>
    <p className={styles.text}>This is a next.js app that is based on information from the Metropolitan Museum of art based in New york. My app consumes an api called the Met Museum of Art Collection to acquire the data about the art housed in the museum. To start accessing the features on my app a user must first create an account. The backend of my app is handled by an express api and a MongoDb database. The express api handles the communication between the Front and and backend of my app and the Mongo database stores users information, the back end of the app is deployed on a service called Render. I am utilising JSON Web Tokens for authorization on login to ensure only authorised users can use specific routes on the app. All stored user passwords are also hashed for extra protection of user data. With an account users are able to search for art pieces and add specific art pieces they enjoy to a collection of favorites.The site also tracks all searches that a user makes and saves it in their history so that they can easily go back to any previous search they have made. I have placed this app on my portfolio to show my ability to work with both the front end and back end aspects of Web Development. &#40;The api spins down after not being used for a while so on first use it will be slower than normal&#41;</p>
      </div>

      <div className={styles.container}>
    
      <h1 className={styles.title}>Spotify Stats</h1>
      <div className={styles.buttonCont}>
        <motion.div whileHover={{scale: 1.1}}>
        <Link href="https://spotifystats-donkorkwasi.vercel.app/" target='_blank'>
      <button className={styles.buttonFloat}>Link to SpotifyStats App</button>
      </Link>
      </motion.div>
      </div>
      <Image src={sp1} className={styles.smallpic}></Image>
      <Image src={sp2} className={styles.smallpic}></Image>
      <p className={styles.text}>Spotify Stats is also a next.js app. The app consumes the spotify api and is currently designed to just show information about any song that is currently available on spotify. The app currently allows users to search Spotify based on song title, artist name or both at the same time.
        Once the search request is sent the app will load up to a maximum 220 results from the search request and display information cards for all songs. Users can then click any information card and it will take them to a page displaying more detailed information about said song.
        The currently deployed version has no back end implemented, but as I continue to develop the app I will add user accounts. I will also add a feature I call &quot;Hit or miss&quot;, this feature will Allow users who are logged in to also search for Albums. Once a user has selected a desired album, the user
        will be able to see the entire track list of the album with a link to the album itself on spotify. Next to each track will be UI elements which will allow for the user to decide if a specific song from the album is good or not. After they have done so for each song they will be able to save their album review
        and generate a public link which anyone can see that holds information about their album review.  &#40;The api spins down after not being used for a while so on first use it will be slower than normal&#41;

      </p>
      </div>
    <Footing></Footing>
    </>
)
}

export default projectBreakdown;