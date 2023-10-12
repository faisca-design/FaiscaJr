import Issue7 from '../components/Issue7'
import Img from "../../public/img/RetanguloIlustrativo.png"

function Index() {
  return (
    <div>
      <Issue7
      titulo1 ="texto1"
      titulo2 = "texto2"
      imagem = {Img}
      imagem2 = {Img}
      imagem3 = {Img}
      imagem4 = {Img}
      imagem5 = {Img}
      nomeprojeto1="projeto1"
      nomeprojeto2="projeto2"
      nomeprojeto3="projeto3"
      nomeprojeto4="projeto4"
      nomeprojeto5="projeto5"
      />
    </div>
  );
}

export default Index;