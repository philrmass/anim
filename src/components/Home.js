import Display from './Display';
import { version } from '../../package.json';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Display />
      <div className={styles.version}>
        {`v${version}`}
      </div>
    </div>
  );
}
