import PurposeText from "@/components/sobreNos/PurposeText"
import AboutFaisca from "@components/sobreNos/AboutFaisca"
import MembersArea from "@components/sobreNos/MembersArea"
import Structure from "@/components/sobreNos/Structure"
import MEJ from "@components/sobreNos/MEJ"
import MEJO from "@components/sobreNos/MEJO"

import styles from "@styles/pages.module.css"

function SobreNos(){
    return (
        <div className={styles.withPadding}>
            <PurposeText />
            <AboutFaisca />
            <MembersArea />
            <Structure/> 
            <MEJO/>
        </div>
    )
}

export default SobreNos