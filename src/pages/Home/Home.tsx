import { useState } from 'react';
import styles from './Home.module.scss';
import CTPLayerIMG from '../../assets/HomeContent/CTPlayer.png';

const contentArr = [
  {
    content: (
      <div className={styles.itemContainer}>
        <div className={styles.itemGrid}>
          <div className={styles.itemText}>
            NUMBER 1 <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, voluptatibus fugit similique minima velit ad dolores
            dolorem deleniti! Modi, amet mollitia itaque totam sunt deserunt
            similique voluptates sint officiis exercitationem?
          </div>
          <div className={styles.itemImg}>
            <img src={CTPLayerIMG} alt={'CT'} />
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={styles.itemContainer}>
        <div className={styles.itemGrid}>
          <div className={styles.itemText}>
            NUMBER 2 <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, voluptatibus fugit similique minima velit ad dolores
            dolorem deleniti! Modi, amet mollitia itaque totam sunt deserunt
            similique voluptates sint officiis exercitationem?
          </div>
          <div className={styles.itemImg}>
            <img src={CTPLayerIMG} alt={'CT'} />
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={styles.itemContainer}>
        <div className={styles.itemGrid}>
          <div className={styles.itemText}>
            NUMBER 3 <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, voluptatibus fugit similique minima velit ad dolores
            dolorem deleniti! Modi, amet mollitia itaque totam sunt deserunt
            similique voluptates sint officiis exercitationem?
          </div>
          <div className={styles.itemImg}>
            <img src={CTPLayerIMG} alt={'CT'} />
          </div>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className={styles.itemContainer}>
        <div className={styles.itemGrid}>
          <div className={styles.itemText}>
            NUMBER 4 <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, voluptatibus fugit similique minima velit ad dolores
            dolorem deleniti! Modi, amet mollitia itaque totam sunt deserunt
            similique voluptates sint officiis exercitationem?
          </div>
          <div className={styles.itemImg}>
            <img src={CTPLayerIMG} alt={'CT'} />
          </div>
        </div>
      </div>
    ),
  },
];

const Home = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const scrollProcentHandler = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0 && itemIndex !== contentArr.length - 1) {
      setItemIndex(itemIndex + 1);
    } else if (event.deltaY < 0 && itemIndex !== 0) {
      setItemIndex(itemIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.scrollSection}
        style={{ transform: `translate(0, -${itemIndex * 100}%)` }}
      >
        {contentArr.map((el, index) => {
          if (index === itemIndex) {
            return (
              <div
                key={index}
                onWheel={scrollProcentHandler}
                style={{ width: '100%', height: '100%' }}
              >
                {el.content}
              </div>
            );
          } else {
            return <span key={index}>{el.content}</span>;
          }
        })}
      </div>
    </div>
  );
};

export default Home;
