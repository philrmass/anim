import { useEffect, useState } from 'preact/hooks';
import { useVisibility } from 'utilities/hooks';
import styles from './Display.module.css';

export default function Display() {
  const [x, setX] = useState(10);
  const [y, setY] = useState(30);
  const isVisible = useVisibility();

  useEffect(() => {
    let id;

    const render = () => {
      setX((x) => x > 120 ? 0 : x + 0.1);
      setY((y) => y > 120 ? 0 : y + 0.1);

      id = requestAnimationFrame(render);
    };

    if (isVisible) {
      id = requestAnimationFrame(render);
    }
    return () => cancelAnimationFrame(id);
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
