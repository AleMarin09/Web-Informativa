import React from 'react'
import styles from './Contact.module.css'

const Conctact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.form} method="POST" action='https://getform.io/f/zbxdrorb' >
        <label for="Name">Name</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email" >Email</label>
        <input id="Email" name="Email" type="Email" className={styles.input}></input>
        <label for="Massage">Massage</label>
        <textarea id="Message" name="Message" className={styles.textArea} ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Conctact