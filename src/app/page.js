import styles from './page.module.css'
import {Inknut_Antiqua, Open_Sans} from 'next/font/google'
const inknut = Inknut_Antiqua({display:"swap",subsets:["latin"],weight:["500"]})
const opensans = Open_Sans({display:"swap",subsets:["latin"],weight:["500","700"]})
export default function Home() {
  return (
    <>
    <section className={styles.hero}
    style={{
      backgroundImage: `url("./blurbg.png")` //so it works with gh-pages
    }}>
      <h1 className={[styles.title,inknut.className].join(" ")}>To Us Good Coffee is Purr-sonal</h1>
      <div className={styles.catsOnaTable}>
        <img src="./cat1.png" alt="cat1" className={styles.cat1}/>
        <img src="./cat2.png" alt="cat2" className={styles.cat2}/>
    <img src="./table.png" alt="table"  className={styles.table}/>
      </div>
    </section>
    <section className={styles.blurb}>
<h2 className={[styles.blurbtext,inknut.className].join(" ")}>
Coffee, cats, and more! Come join the fun! 
</h2>
    <button className={[styles.visit,opensans.className].join(" ")} >
      Visit Now!
    </button>
    </section>
    <section className={styles.form}>
      <h2 className={[styles.formtitle,inknut.className].join(" ")}>
        Lets Connect!
      </h2>
      <form className={styles.formform}>  
      {/* name */}
      <input type="text" name="name" id="name" placeholder='Name' />
      {/* email */}
      <input type="email" name="email" id="email" placeholder='Email' />
      {/* submit */}
      <button className={[styles.submit,opensans.className].join(" ")} >
      Submit
    </button>
      </form>
    </section>
    
    </>
  )
}
