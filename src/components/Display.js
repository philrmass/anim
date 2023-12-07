import { useEffect, useState } from 'preact/hooks';
import { useVisibility } from 'utilities/hooks';
import styles from './Display.module.css';

function wrap(a0, da, min, max) {
  const a1 = a0 + da;
  const range = max - min;

  if (a1 < min) {
    return a1 + range;
  } else if (a1 > max) {
    return a1 - range;
  }
  return a1;
}

export default function Display() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [vx, _setVx] = useState(8);
  const [vy, _setVy] = useState(3);
  const [size, setSize] = useState();
  const isVisible = useVisibility();

  useEffect(() => {
    let id;

    const render = () => {
      const left = size?.left ?? 0;
      const right = size?.right ?? 0;
      const top = size?.top ?? 0;
      const bottom = size?.bottom ?? 0;

      const dt = 0.1;
      const dx = dt * vx;
      const dy = dt * vy;

      setX((x) => wrap(x, dx, left, right));
      setY((y) => wrap(y, dy, top, bottom));

      id = requestAnimationFrame(render);
    };

    if (isVisible) {
      id = requestAnimationFrame(render);
    }
    return () => cancelAnimationFrame(id);
  }, [isVisible, size, vx, vy]);

  const handleRef = (elem) => {
    if (elem && !size) {
      setSize(elem.getBoundingClientRect());
    }
  };

  const handleClick = (e) => {
    console.log('val', e.clientX, e.offsetX, e.layerX, e.screenX, e.pageX);
  };

  const dotStyle = { left: `${x}px`, top: `${y}px` };

  return (
    <div
      ref={handleRef}
      className={styles.display}
      onClick={handleClick}
    >
      DISPLAY
      <div
        className={styles.dot}
        style={dotStyle}
      />
    </div>
  );
}
