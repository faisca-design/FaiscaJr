import PurposeText from "@/components/sobreNos/PurposeText"
import AboutFaisca from "@components/sobreNos/AboutFaisca"
import MembersArea from "@components/sobreNos/MembersArea"
import MakeCard from "@/components/sobreNos/MembersArea/MakeCard"
import Structure from "@/components/sobreNos/Structure"
import MEJ from "@components/sobreNos/MEJ"
import foto from './../../../public/img/sobreNos/Foto01.png'

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