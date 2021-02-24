import PiggyBank from "./PiggyBank/PiggyBank";
import styles from "./Playground.module.css";
let countPigs = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const renderPigs = (countPigs) => {
  return countPigs.map((pig) => {
    return <PiggyBank key={pig.id} />;
  });
};

const randomPiggyBank = (countPigs) => {
  let lastBank;
  const number = Math.floor(Math.random() * countPigs.length);
  const bank = countPigs[number];
  console.log(bank.id);
  if (bank === lastBank) {
    return randomPiggyBank(countPigs);
  }
  lastBank = bank;
  return bank;
};




const Playground = () => {
  return <div className={styles.playground}>{renderPigs(countPigs)}</div>;
};

export default Playground;
