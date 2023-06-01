import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import styles from './Errors.module.scss';
import Close from '../../assets/icons/CloseIcon/Close.svg';
import { IError } from '../../models/Error/IError';

const Errors = () => {
  // const { errorStore } = useContext(Context);
  // const [errorData, setErrorData] = useState({
  //   isClose: false,
  //   error: errorStore.errors[0],
  // });
  // //   useEffect(() => {
  // //     setErrorData({ isClose: false,  });
  // //   }, [errorData]);
  // console.log(errorData.error);
  // //   setTimeout(() => {
  // //     setTimeout(() => {
  // //       if (!errorData.wasDeleted) {
  // //         errorStore.deleteError();
  // //         console.log(1);
  // //         setErrorData({ wasDeleted: false, isClose: false });
  // //       }
  // //     }, 250);
  // //     setErrorData({ ...errorData, isClose: true });
  // //   }, 10100);
  // const closeError = () => {
  //   setTimeout(() => {
  //     errorStore.deleteError();
  //     if (errorStore.errors.length > 0) {
  //       setErrorData({ error: errorStore.getError(), isClose: false });
  //     } else {
  //       setErrorData({ error: {} as IError, isClose: true });
  //     }
  //   }, 250);
  //   setErrorData({ ...errorData, isClose: true });
  // };
  // return (
  //   <>
  //     {errorStore.errors.length > 0 ? (
  //       <div
  //         className={
  //           styles.container + ' ' + (errorData.isClose ? styles.close : '')
  //         }
  //       >
  //         <div className={styles.typeError}>
  //           Type {`${errorData.error.status}`}
  //         </div>
  //         <div
  //           className={styles.messageError}
  //         >{`${errorData.error.message}`}</div>
  //         <div onClick={closeError} className={styles.closeButton}>
  //           <img src={Close} />
  //         </div>
  //         {/* <div className={styles.loader} /> */}
  //       </div>
  //     ) : (
  //       ''
  //     )}
  //   </>
  // );
};

// export default observer(Errors);
