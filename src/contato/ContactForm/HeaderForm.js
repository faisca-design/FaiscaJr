import styles from "./headerForm.module.css"

function HeaderForm(){
    return(
        <div className={styles.headerForm}>
            <div className={styles.headerFormTxt}>
                <p>Entre em contato com a gente <br /> <spam className={styles.lowTxt}> retornamos sua mensagem em até 5 dias úteis.</spam></p>
            </div>
            <div className={styles.headerFormHR}>
                <hr />
            </div>

        </div>
    )



}
export default HeaderForm