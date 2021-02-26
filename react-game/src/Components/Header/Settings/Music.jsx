import ReactAudioPlayer from "react-audio-player";
import sound from "./music.mp3";
import styles from './Music.module.css';


export const Sound = () => {
  return (
    <div className={styles.music}>
      <ReactAudioPlayer src={sound} loop={true} autoPlay controls />
    </div>
  );
};
