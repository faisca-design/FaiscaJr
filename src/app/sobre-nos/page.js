import styles from "@styles/pages.module.css"
import PurposeText from "@/components/sobreNos/PurposeText"
import AboutFaisca from "@components/sobreNos/AboutFaisca"
import MembersArea from "@components/sobreNos/MembersArea"
import Structure from "@/components/sobreNos/Structure"
import MEJ from "@components/sobreNos/MEJ"

import rectangle from '@img/sobreNos/Structure/rectangle.png'
import img from "@img/sobreNos/LogoVertical.svg"
import brasilJR from "@img/sobreNos/MEJ/brasil.png"
import NejPoa from "@img/sobreNos/MEJ/NejPOANova.png"
import fejers from "@img/sobreNos/MEJ/fejers.png"
import designUFRGS from "@img/sobreNos/MEJ/designUFRGS.png"
import rectagle2 from '@img/sobreNos/MEJ/teste.png'


function SobreNos() {
    return (
        <div className={styles.withPadding}>
            <PurposeText
                purpose={"nós projetamos ##experiências valiosas## para ajudar empresas e pessoas a entregarem marcas, produtos e serviços incríveis!"}
            />

            <AboutFaisca
                firstText={"A Faísca é uma empresa júnior de design da Universidade Federal do Rio Grande do Sul (UFRGS) que se destaca, no mercado, por sua combinação de **criatividade** e **eficiência**. Formada por estudantes universitários altamente capacitados em design, a Faísca tem como principal diferencial a capacidade de trabalhar em estreita **colaboração** com o cliente desde o início do projeto, visando compreender suas necessidades e expectativas, a fim de criar **soluções personalizadas** e que atendam aos seus objetivos. "}
                secondText={"Se você está em busca de uma empresa de design que oferece soluções criativas e eficientes, a Faísca é a escolha ideal. Conte conosco para ajudá-lo a alcançar seus objetivos e superar suas expectativas."}
                logo={img}
            />

            <MembersArea
                tittle={"Nossa Equipe"}
                subTittle={"Estas são as pessoas que fazem a Faísca acontecer."}
            />

            <Structure
                tittle={"ESTRUTURA"}
                phrase={"A Faísca, empresa júnior de design da UFRGS, conta com uma estrutura de trabalho completa e moderna, que inclui equipamentos de alta tecnologia, salas de reunião e espaço de convivência para a equipe. Além disso, a empresa tem acesso a diversas bibliotecas da universidade, o que possibilita o acesso a uma vasta gama de materiais de pesquisa e literatura técnica."}
                
                imgOne={rectangle}
                subTittleOne={"Sala da Faísca"}
                textOne={"Nosso espaço exclusivo para desenvolvimento dos projetos."}

                imgTwo={rectangle}
                subTittleTwo={"Laboratório de protótipo e ensaios"}
                subSubTittleTwo={""}
                textTwo={"Temos acesso a um maquinário de alta tecnologia disponibilizado pela universidade para a realização de seus projetos. Entre as ferramentas disponíveis, destacam-se o corte a laser e o CNC."}

                imgThree={rectangle}
                subTittleThree={"Biblioteca"}
                textThree={"Um acervo completo sobre design esta á nossa disposição."}

                imgFour={rectangle}
                subTittleFour={"LabMod"}
                subSubTittleFour={"LABORATÓRIO INTERDESCIPLINAR DE MODELAGEM"}
                textFour={"Entregamos protótipos e estudamos formas para melhor atender as suas necessidades. Para isso contamos com um laboratório completo de impressoras 3D."}

            />

            <MEJ
                tittle={"Movimento Empresa Jr"}
                phrase={"Nossa missão é formar, por meio da vivência empresarial, lideranças comprometidas e capazes de transformar o país em um brasil empreendedor. Desde 2010, o MEJ já impactou mais de R$ 70.000.000,00 na economia brasileira, que são integralmente reinvestidos na educação empreendedora dos estudantes."}
                mainImg={rectagle2}
                brasilJrImg={brasilJR}
                NejImg={NejPoa}
                fejersImg={fejers}
                designUFRGSImg={designUFRGS}
            />
        </div>
    )
}

export default SobreNos