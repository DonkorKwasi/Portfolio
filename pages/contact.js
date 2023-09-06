import Navbar from "components/NavBar"
import Footing from "components/Footing"
import styles from "../src/styles/resume.module.css"
function contact()
{
return(
<>
<Navbar></Navbar>
<div className={styles.title}>
<h1 className={styles.fnt}>My resume</h1>
</div>
<div className={styles.res}>
<object
type="application/pdf"
data='Kwasi_Resume.pdf'
width='1700'
height='2200'

>
    
</object>
</div>
</>

)
}
export default contact