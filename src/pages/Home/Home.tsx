import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import CTPLayerIMG from '../../assets/HomeContent/CTPlayer.png';

const Home = () => {
  const { t } = useTranslation();
  const [itemIndex, setItemIndex] = useState(0);

  const contentArr = [
    {
      content: (
        <div className={styles.itemContainer}>
          <div className={styles.itemGrid}>
            <div className={styles.itemText}>{t('home.slide1')}</div>
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
            <div className={styles.itemText}>{t('home.slide2')}</div>
            <div className={styles.itemImg}>
              <img src={CTPLayerIMG} alt={'CT'} />
            </div>
          </div>
        </div>
      ),
    },
  ];
  const scrollProcentHandler = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0 && itemIndex !== contentArr.length - 1) {
      setItemIndex(itemIndex + 1);
    } else if (event.deltaY < 0 && itemIndex !== 0) {
      setItemIndex(itemIndex - 1);
    }
  };

  var touchStart: number, touchMove: number;

  const setTouStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStart = event.touches[0].clientY;
  };

  const setTouMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchMove = event.touches[0].clientY;
  };

  const swipeHandler = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart > touchMove + 5 && itemIndex !== contentArr.length - 1) {
      setItemIndex(itemIndex + 1);
    } else if (touchStart < touchMove - 5 && itemIndex !== 0) {
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
                onTouchStart={setTouStart}
                onTouchMove={setTouMove}
                onTouchEnd={swipeHandler}
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
