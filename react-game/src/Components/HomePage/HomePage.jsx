import styles from "./HomePage.module.css";

const HomePage = (props) => {
  
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className={styles.description}>{props.description}</div>
        <button
          className={styles.cardButton}
          onClick={() => props.buttonClick()}
        >
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
