import PurposeText from "@components/PurposeText"
import AboutFaisca from "@components/AboutFaisca"
import MembersArea from "@components/MembersArea"
import Structure from "@components/Structure"
import MEJ from "@components/MEJ"

import styles from "./about.module.css"

function SobreNos(){
    return (
        <>
            <PurposeText />
            <AboutFaisca />
            <MembersArea />
            <Structure />
            <MEJ />
        </>
    )
}

export default SobreNos