import styles from "./textoEstilizado.module.css"
import React from 'react';

const textoEstilizado = ({ text }) => {
  const renderStyledText = () => {
    if (!text) return '';

    // Dividimos por {{ }}, ** **, e ## ##
    return text.split(/(\{\{.*?\}\}|\*\*.*?\*\*|\#\#.*?\#\#)/g).map((part, index) => {
      // Verifica se é um texto com fonte allegin
      if (part.startsWith('{{') && part.endsWith('}}')) {
        const content = part.slice(2, -2);
        return (
          <span key={index} className={styles.AlleginFont}>
            {content}
          </span>
        );
      }
      // Verifica se é um texto em negrito
      else if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2);
        return (
          <span key={index} className={styles.bold}>
            {content}
          </span>
        );
      }
      // Verifica se é um texto com fonte LexendDeca-Medium
      else if (part.startsWith('##') && part.endsWith('##')) {
        const content = part.slice(2, -2);
        return (
          <span key={index} className={styles.lexendDeca}>
            {content}
          </span>
        );
      }
      // Retorna o texto normal
      return part;
    });
  };

  return <div>{renderStyledText()}</div>;
};

export default textoEstilizado;