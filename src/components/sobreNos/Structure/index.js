import React from 'react';
import styles from "./structure.module.css";
import CardRightText from './CardRightText';
import CardLeftText from './CardLeftText';
import rectangle from '@img/sobreNos/Structure/rectangle.png'

function EstruturaFaisca() {
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1>ESTRUTURA</h1>
        <p>A Faísca, empresa júnior de design da UFRGS, conta com uma estrutura de trabalho completa e moderna, que inclui
          equipamentos de alta tecnologia, salas de reunião e espaço de convivência para a equipe. Além disso, a empresa tem acesso
          a diversas bibliotecas da universidade, o que possibilita o acesso a uma vasta gama de materiais de pesquisa e literatura
          técnica.</p>
      </div>
      <CardRightText
        imgPath={rectangle}
        erro={"error"}
        tittle={"Sala da Faísca"}
        text={"Nosso espaço exclusivo para desenvolvimento dos projetos."} />

      <CardLeftText
        imgPathLT={rectangle}
        erroLT={"error"}
        tittleLT={"Laboratório de protótipo e ensaios"}
        subTittleLT={""}
        textLT={"Temos acesso a um maquinário de alta tecnologia disponibilizado pela universidade para a realização de seus projetos. Entre as ferramentas disponíveis, destacam-se o corte a laser e o CNC."} />

      <CardRightText
        imgPath={rectangle}
        erro={"error"}
        tittle={"Biblioteca"}
        text={"Um acervo completo sobre design esta á nossa disposição. "} />

      <CardLeftText
        imgPathLT={rectangle}
        erroLT={"error"}
        tittleLT={"LabMod"}
        subTittleLT={"LABORATÓRIO INTERDESCIPLINAR DE MODELAGEM"}
        textLT={"Entregamos protótipos e estudamos formas para melhor atender as suas necessidades. Para isso contamos com um laboratório completo de impressoras 3D."} />

    </div>
  );
}

export default EstruturaFaisca;
