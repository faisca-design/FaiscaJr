import React from 'react';
import styles from './allMembers.module.css';
import Card from './card';
import StyledText from "@/components/textoEstilizado/textoEstilizado";
import { ordenarMembros } from '@/utils/functions/memberSort';

function AllCards({ tittle, subTittle, membersData }) {
  const membroOrdenados = ordenarMembros(membersData);

  return (
    <div>
      <h2 className={styles.title}><StyledText text={tittle}/></h2>
      {subTittle && <h1 className={styles.subTittle}><StyledText text={subTittle}/></h1>}
      <section className={styles.container}>
        <div className={styles.row}>
          {membroOrdenados.map((DMembers) => (
            <Card
              key={DMembers.id}
              members={DMembers.members || [{
                nome: DMembers.nome,
                ciclo: DMembers.ciclo,
                imagem: DMembers.imagem
              }]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllCards;