import React from 'react'
import styles from "./Home.module.css";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titleContainer}>
      <p>
        Expand your <br />
        <b>business</b>
      </p>
      <p>
        Whith the best <br />
        <b>online presence</b>
      </p>
    </div>
    <div className={styles.ctaContainer}>
      <Link to = "Contact" smoothduration={500} className={styles.callToAction}>
        Get in Touch
      </Link>
      <Link to = "Contact" smoothduration={500} className={styles.callToAction}>
        Get a Quote
      </Link>
    </div>
    </div>
  )
}

export default Home