import MembersRow1 from './MembersRow1';
import MembersRow2 from './MembersRow2';
import MembersRow3 from './MembersRow3';
import MembersRow4 from './MembersRow4';
import FOTO from '@img/Foto01.png'

//CONSTANTE QUE ARMAZENA A LISTA COM TODOS OS MEMBROS
const membros = [
    { imagem: FOTO, nome: 'João', ciclo: 'Desenvolvedor' },
    { imagem: FOTO, nome: 'Maria', ciclo: 'Designer' },
    { imagem: FOTO, nome: 'Pedro', ciclo: 'Gerente' },
    { imagem: FOTO, nome: 'Ana', ciclo: 'Analista' },
    { imagem: FOTO, nome: 'Lucas', ciclo: 'Estagiário' },
    { imagem: FOTO, nome: 'Gleydson', ciclo: 'Designer' },
    { imagem: FOTO, nome: 'Carol', ciclo: 'Desemvolvedora' },
    { imagem: FOTO, nome: 'Gabriel', ciclo: 'Diretor' },
    { imagem: FOTO, nome: 'Arthur', ciclo: 'Gerente' },
    { imagem: FOTO, nome: 'Bruno', ciclo: 'Analista' },
    { imagem: FOTO, nome: 'Agusto', ciclo: 'Estagiário' },
    { imagem: FOTO, nome: 'Juliana', ciclo: 'Supervisora' },
    { imagem: FOTO, nome: 'Carolina', ciclo: 'Estagiário' },
    { imagem: FOTO, nome: 'Julia', ciclo: 'Analista' },
    { imagem: FOTO, nome: 'André', ciclo: 'Desemvolverdor' },
    { imagem: FOTO, nome: 'Luca', ciclo: 'Estagiário' },
    { imagem: FOTO, nome: 'Diego', ciclo: 'Supervisora' },
    { imagem: FOTO, nome: 'João Pedro', ciclo: 'Estagiário' },
    { imagem: FOTO, nome: 'Pedro', ciclo: 'Analista' },
    { imagem: FOTO, nome: 'Leonardo', ciclo: 'Estagiário' },
];


function CardsDisposition() {
    return (
        <div>
            <MembersRow1 members={membros} />
            <MembersRow2 members={membros} />
            <MembersRow3 members={membros} />
            <MembersRow4 members={membros} />
        </div>
    )
}

export default CardsDisposition;