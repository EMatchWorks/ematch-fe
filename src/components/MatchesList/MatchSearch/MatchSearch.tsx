import { type } from 'os';
import { useState } from 'react';
import Input from '../../../assets/icons/Input/Input';
import styles from './MatchSearch.module.scss';

type MatchSearchProps = {
  inputValue: string;
  setInputValue: Function;
};

const MatchSearch = ({ inputValue, setInputValue }: MatchSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.search + ' ' + (isOpen ? styles.open : '')}>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />{' '}
      <div className={styles.inputIcon}>
        <Input isOpen={isOpen} clikFunc={searchOpenHandler} />
      </div>
    </div>
  );
};

export default MatchSearch;
