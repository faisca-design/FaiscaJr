import styles from "./purpTxt.module.css"

function PurpTxt(){
    return(
        <div className={styles.purpTxt}>
                <p>  
                nós projetamos <span className='Allegin'>experiências valiosas </span>para a vida das pessoas.
                 com uma abordagem <span className='Allegin'>estratégica</span>, utilizamos <span className='Allegin'>pesquisa</span> de experiência de usuário, 
                 <span className='Allegin'> design</span> e <span className='Allegin'>tecnologia</span> para ajudar as empresas e pessoas a entregarem marcas, 
                 produtos e serviços incríveis
                </p>
        </div>
    )
}
export default PurpTxt