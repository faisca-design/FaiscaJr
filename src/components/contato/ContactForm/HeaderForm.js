import styles from "./headerForm.module.css"
import StyledText from "@/components/textoEstilizado/textoEstilizado"


function HeaderForm({ text, info}){
    return(
        <div className={styles.headerForm}>
            <div className={styles.headerFormTxt}>
                <p><StyledText text={text}/></p>
                <p className={styles.lowTxt}> <StyledText text={info}/></p>
            </div>
            <div className={styles.headerFormHR}>
                <hr />
            </div>

        </div>
    )



}
export default HeaderForm