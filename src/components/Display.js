import { useEffect, useState } from 'preact/hooks';
import { useVisibility } from 'utilities/hooks';
import styles from './Display.module.css';

export default function Display() {
  const [x, _setX] = useState(10);
  const [y, _setY] = useState(30);
  const isVisible = useVisibility();

  useEffect(() => {
    console.log('VIS', isVisible);
  }, [isVisible]);

  const dotStyle = { left: `${x}%`, bottom: `${y}%` };

  return (
    <div className={styles.display}>
      DISPLAY
      <div
        className={styles.dot}
        style={dotStyle}
      />
    </div>
  );
}
