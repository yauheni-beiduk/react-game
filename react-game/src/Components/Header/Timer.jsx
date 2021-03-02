import styles from "./Header.module.css";

const Timer = ({ sec }) => {
  return (
    <div>
      {sec === 0 ? (
        <div className={styles.size}>Time: 0</div>
      ) : (
        <div className={styles.size}>Time: {sec < 10 ? `0${sec}` : sec}</div>
      )}
    </div>
  );
};

export default Timer;
