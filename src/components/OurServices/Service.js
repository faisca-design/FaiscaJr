import styles from './service.module.css'

function Service(prop){
    return(
        <div className={styles.service}>
            <p>{prop.servico}</p>
            <hr />
        </div>
    )



}
export default Service