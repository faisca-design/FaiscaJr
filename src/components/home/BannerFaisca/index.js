import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image';
import logoFaisca from './../../../../public/img/home/Logofaisca.png'

export default function BannerFaisca() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div>
          <h2 className={styles.title1}>PROPORCIONAMOS<br></br>SOLUÇÕES CRIATIVAS<br></br> PARA PROJETOS <br></br> EXCLUSIVOS</h2>
        </div>
        <div>
          <Image 
            className={styles.imglogo} 
            src={logoFaisca} 
            alt={'nome'} 
            width={853} 
            height={687} 
            style={{ 
              width: '45vw', // Define largura relativa à tela para desktop
              height: '75vh', // Define altura relativa à tela para desktop
              '@media only screen and (max-width: 600px)': {
                width: '426px', // Reseta a largura para tamanho automático em dispositivos móveis
                height: '426px', // Reseta a altura para tamanho automático em dispositivos móveis
              }
            }} 
          />
        </div>
        <div>
          <h2 className={styles.title2}>SOMOS <br></br>A FAÍSCA!</h2>
          <h2 className={styles.title3}>UMA EMPRESA JÚNIOR DE DESIGN<br></br> VISUAL E DE PRODUTA DA UFRGS.</h2>
        </div>
      </div>
    </div>
  )
}
