import styles from "./purpTxt.module.css"
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function PurpTxt({ purpose }){
    return(
        <div className={styles.purpTxt}>
                <p>  
                <StyledText text={purpose}/>
                </p>
        </div>
    )
}
export default PurpTxt
