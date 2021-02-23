
import styles from'./App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Playground from './Components/Playground/Playground';

function App() {
  return (
    <div className={styles.game}>
    <Header/>
    <Playground/>
    <Footer/>
    </div>
  );
}

export default App;
