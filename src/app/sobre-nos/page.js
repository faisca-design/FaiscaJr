import PurposeText from "@components/PurposeText"
import AboutFaisca from "@components/AboutFaisca"
import MembersArea from "@components/MembersArea"
import Structure from "@components/Structure"

import styles from "./about.module.css"

function SobreNos(){
    return (
        <>
            <PurposeText />
            <AboutFaisca />
            <MembersArea />
            <Structure />
        </>
    )
}

export default SobreNos