import PurposeText from "@components/PurposeText"
import AboutFaisca from "@components/AboutFaisca"
import MembersArea from "@components/MembersArea"
import Structure from "@components/Structure"
import MEJ from "@components/MEJ"

import styles from "@styles/pages.module.css"

function SobreNos(){
    return (
        <div className={styles.withPadding}>
            <PurposeText />
            <AboutFaisca />
            <MembersArea />
            <Structure />
            <MEJ />
        </div>
    )
}

export default SobreNos