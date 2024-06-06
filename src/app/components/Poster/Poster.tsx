import React from 'react'
import styles from './Poster.module.scss';

import logo from '../../../../public/images/secretbrand-poster.png'
import Image from 'next/image';

const Poster = () => {
  return (
    <section className={styles.poster}>
      <div className={styles.posterImage}>
        <Image src={logo} alt="Secret Brand Poster" />
      </div>
    </section>
  )
}

export default Poster;