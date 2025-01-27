import styles from "@styles/pages.module.css"
import PurposeText from "@/components/sobreNos/PurposeText"
import AboutFaisca from "@components/sobreNos/AboutFaisca"
import Structure from "@/components/sobreNos/Structure"
import MEJ from "@components/sobreNos/MEJ"
import { handleJSONfile, handleJSONfiles } from '../../utils/jsonHandler.js'
import Members from "@components/sobreNos/Members"

async function getData() {
    const sobreNosData = await handleJSONfile('content/sobreNos/sobreNosPage.json');
    const membersData = await handleJSONfiles('content/membros');

    if (!sobreNosData) {
        throw new Error('Falha ao carregar dados da página sobre nós');
    }

    return {
        sobreNosData,
        membersData
    };
}

async function SobreNos() {
    const { sobreNosData, membersData } = await getData();
    const { purpose, aboutFaisca, membersArea, structure, mej } = sobreNosData;

    return (
        <div className={styles.withPadding}>
            <PurposeText purpose={purpose} />

            <AboutFaisca
                firstText={aboutFaisca.firstText}
                secondText={aboutFaisca.secondText}
                logo={aboutFaisca.logo}
            />

            <Members
                tittle={membersArea.tittle}
                subTittle={membersArea.subTittle}
                membersData={membersData}
            />

            <Structure
                tittle={structure.tittle}
                phrase={structure.phrase}

                imgOne={structure.sectionOne.img}
                subTittleOne={structure.sectionOne.subTittle}
                textOne={structure.sectionOne.text}

                imgTwo={structure.sectionTwo.img}
                subTittleTwo={structure.sectionTwo.subTittle}
                subSubTittleTwo={structure.sectionTwo.subSubTittle}
                textTwo={structure.sectionTwo.text}

                imgThree={structure.sectionThree.img}
                subTittleThree={structure.sectionThree.subTittle}
                textThree={structure.sectionThree.text}

                imgFour={structure.sectionFour.img}
                subTittleFour={structure.sectionFour.subTittle}
                subSubTittleFour={structure.sectionFour.subSubTittle}
                textFour={structure.sectionFour.text}
            />

            <MEJ
                tittle={mej.tittle}
                phrase={mej.phrase}
                mainImg={mej.mainImg}
                brasilJrImg={mej.brasilJrImg}
                NejImg={mej.NejImg}
                fejersImg={mej.fejersImg}
                designUFRGSImg={mej.designUFRGSImg}
            />
        </div>
    )
}

export default SobreNos