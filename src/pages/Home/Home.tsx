import { useState } from 'react';
import styles from './Home.module.scss';
import CTPLayerIMG from '../../assets/HomeContent/CTPlayer.png';

const Home = () => {
  const [scrollProcent, setScrollProcent] = useState(0);
  const scrollProcentHandler = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0 && scrollProcent < 309) {
      console.log(scrollProcent);
      setScrollProcent(scrollProcent + 103);
    } else if (event.deltaY < 0 && scrollProcent > 0) {
      console.log(scrollProcent);
      setScrollProcent(scrollProcent - 103);
    }
  };

  return (
    <div className={styles.container}>
      <div
        onWheel={scrollProcentHandler}
        className={styles.scrollSection}
        style={{
          transform: `translate(0, -${scrollProcent}%)`,
        }}
      >
        <div className={styles.itemContainer}>
          <div className={styles.itemGrid}>
            <div className={styles.itemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, voluptatibus fugit similique minima velit ad
              dolores dolorem deleniti! Modi, amet mollitia itaque totam sunt
              deserunt similique voluptates sint officiis exercitationem?
            </div>
            <div className={styles.itemImg}>
              <img src={CTPLayerIMG} />
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemGrid}>
            <div className={styles.itemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, voluptatibus fugit similique minima velit ad
              dolores dolorem deleniti! Modi, amet mollitia itaque totam sunt
              deserunt similique voluptates sint officiis exercitationem?
            </div>
            <div className={styles.itemImg}>
              <img src={CTPLayerIMG} />
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemGrid}>
            <div className={styles.itemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, voluptatibus fugit similique minima velit ad
              dolores dolorem deleniti! Modi, amet mollitia itaque totam sunt
              deserunt similique voluptates sint officiis exercitationem?
            </div>
            <div className={styles.itemImg}>
              <img src={CTPLayerIMG} />
            </div>
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.itemGrid}>
            <div className={styles.itemText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, voluptatibus fugit similique minima velit ad
              dolores dolorem deleniti! Modi, amet mollitia itaque totam sunt
              deserunt similique voluptates sint officiis exercitationem?
            </div>
            <div className={styles.itemImg}>
              <img src={CTPLayerIMG} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
