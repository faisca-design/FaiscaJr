import styles from "./purpTxt.module.css";

function PurpTxt() {
  return (
    <div className={styles.purpTxt}>
      <p>
        nós projetamos <span className={styles.altText}>experiências valiosas</span> para a vida das pessoas. com uma
        abordagem <span className={styles.altText}>estratégica</span>, utilizamos <span className={styles.altText}>pesquisa</span>{" "}
        de experiência de usuário, <span className={styles.altText}>design</span> e{" "}
        <span className={styles.altText}>tecnologia</span> para ajudar as empresas e pessoas a entregarem marcas,
        produtos e serviços incríveis!
      </p>
    </div>
  );
}
export default PurpTxt;
